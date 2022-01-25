package controller.results;

import com.google.common.hash.Hashing;
import controller.GlobalBean;
import model.entity.Hit;
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

@Path("/hits")
public class HitController {

    @EJB
    private GlobalBean globalBean;

    @POST
    @Path("/add")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response addHit(Map<String, String> data) {
        if (globalBean.isRegistered(data.get("login"), Hashing.sha256().hashString(data.get("password"), StandardCharsets.UTF_8).toString())) {
            ArrayList<Hit> result = new ArrayList<>();
            double x = Double.parseDouble(data.get("X"));
            double y = Double.parseDouble(data.get("Y"));
            double r = Double.parseDouble(data.get("R"));
            Hit hit = new Hit();
            hit.setX(x);
            hit.setY(y);
            hit.setR(r);
            try {
                globalBean.addHit(hit, data.get("login"));
                result.add(hit);
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
                        .entity("Could not add a hit")
                        .header("Access-Control-Allow-Origin", "*")
                        .header("Access-Control-Allow-Credentials", "true")
                        .header("Access-Control-Allow-Headers",
                                "origin, content-type, accept, authorization")
                        .header("Access-Control-Allow-Methods",
                                "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                        .build();
            }

        } else {
            return Response.status(403)
                    .entity("User is not confirmed")
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Methods",
                            "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build();
        }
    }

    @POST
    @Path("/get")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response getAllPoints(Map<String, String> data) {
        System.out.println(data.get("login"));
        if (globalBean.isRegistered(data.get("login"), Hashing.sha256().hashString(data.get("password"), StandardCharsets.UTF_8).toString())) {
            return Response.ok()
                    .entity(JSONParser.toJSON(globalBean.getHits(data.get("login"))))
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Methods",
                            "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build();
        } else {
            return Response.status(403)
                    .entity("User is not confirmed")
                    .header("Access-Control-Allow-Origin", "*")
                    .header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Headers",
                            "origin, content-type, accept, authorization")
                    .header("Access-Control-Allow-Methods",
                            "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                    .build();
        }
    }
}
