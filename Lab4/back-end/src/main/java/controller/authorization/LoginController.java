package controller.authorization;

import com.google.common.hash.Hashing;
import controller.GlobalBean;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.nio.charset.StandardCharsets;
import java.util.Map;

@Path("/login")
public class LoginController {

    @EJB
    private GlobalBean globalBean;

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response authorize(Map<String, String> data) {
        if (globalBean.isRegistered(data.get("login"), Hashing.sha256().hashString(data.get("password"), StandardCharsets.UTF_8).toString())) {
            return Response.ok()
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Methods",
                            "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build();
        } else {
            return Response.status(403)
                    .entity("Authorization Failed")
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
