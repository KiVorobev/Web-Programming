package util;

import model.entity.Hit;

import java.util.ArrayList;

public class JSONParser {

    public static String toJSON(ArrayList<Hit> collection) {
        StringBuilder json = new StringBuilder();
        json.append("[\n");
        if (collection.size() != 0) {
            for (int i = 0; i < collection.size(); i++) {
                if (i != collection.size() - 1) {
                    json.append(toJSON(collection.get(i))).append(",\n");
                } else {
                    json.append(toJSON(collection.get(i))).append("\n");
                }
            }
        }
        json.append("]");
        return json.toString();
    }

    public static String toJSON(Hit hit) {
        return "    {\n" +
                "       \"X\": \"" + hit.getX() + "\",\n" +
                "       \"Y\": \"" + hit.getY() + "\",\n" +
                "       \"R\": \"" + hit.getR() + "\",\n" +
                "       \"result\": \"" + hit.isResult() + "\",\n" +
                "       \"date\": \"" + hit.getDate() + "\"\n" +
                "   }";
    }
}
