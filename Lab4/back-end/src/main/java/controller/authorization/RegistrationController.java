package controller.authorization;

import com.google.common.hash.Hashing;
import controller.GlobalBean;
import model.entity.Hit;
import model.entity.User;
import util.JSONParser;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Map;

@Path("/registration")
public class RegistrationController {

    @EJB
    private GlobalBean globalBean;

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response registration(Map<String, String> data) {
        ArrayList<Hit> result = new ArrayList<>();
        System.out.println(data);
        User user = new User();
        user.setUsername(data.get("login"));
        user.setPassword(Hashing.sha256().hashString(data.get("password"), StandardCharsets.UTF_8).toString());
        if (globalBean.isRegistered(user.getUsername(), user.getPassword())) {
            return Response.status(403)
                    .entity("User already exists")
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Methods",
                            "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build();
        }
        try {
            globalBean.addUser(user);
            return Response.ok()
                    .entity(JSONParser.toJSON(result))
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Methods",
                            "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.serverError()
                    .entity("Could not add a user")
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Methods",
                            "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build();
        }

    }

    @OPTIONS
    public Response answer(){
        return Response.ok()
                .entity("")
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers",
                        "origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods",
                        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .build();
    }
}
