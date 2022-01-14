package controller.results;

import model.entity.Result;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Packer {
    Result result = new Result();
    HitChecker hitChecker = new HitChecker();

    public void packing (){
        try {
            double x = 1; //Double.parseDouble(request.getParameter("X"));
            double y = 1; //Double.parseDouble(request.getParameter("Y"));
            double r = 1; //Double.parseDouble(request.getParameter("R"));

            if (x < -2 || x > 2 || y <= -5 || y >= 5 || r <= 0 || r > 2) {
                // ошибка
                return;
            }

            String currentTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            long start = System.nanoTime();
            boolean result = hitChecker.isHit(x, y, r);
            long executionTime = (System.nanoTime() - start) / 1000;

            /* Задание параметров для результата (В теории можно через конструктор создавать) */
//            result.setX(DoubleRounder.round(x, 6));
//            result.setY(DoubleRounder.round(y, 6));
//            result.setR(DoubleRounder.round(r, 6));
//            result.setCurrentTime(currentTime);
//            result.setExecutionTime(executionTime);
//            result.setResult(result);

        } catch (NumberFormatException exception) {
            // Ошибка, если числа не парсится в Double
        }

        /* Отправка ответа */
//        response.setHeader("Cache-Control", "no-cache");
//        response.setContentType("application/json; charset=UTF-8");
//        response.getWriter().println(result.jsonBean());
    }
}
