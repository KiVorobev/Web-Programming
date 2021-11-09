<%@ page import="com.example.Web2.results.Data" %>
<%@ page import="java.util.List" %>
<%@ page import="com.example.Web2.results.Data" %>
<%@ page import="com.example.Web2.results.Bean" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/jpg" href="img/vt-logo.jpg">
    <title>First lab of Web</title>
    <style>
        .header {
            text-align: center;
            font: 30px monospace;
            color: #ecec97;
            width: 1518px;
            height: 90px;
            background-color: purple;
            position: relative;
            box-shadow: 0 0 10px 5px rgba(16, 18, 30, 0.55);
            border-radius: 0 0 20px 20px;
            z-index: 1000;
            transition: 300ms;
        }

        body {
            background: white;
            margin: auto;
            height: 100%;
        }

        a {
            margin: 0;
            font: 45px monospace;
            text-align: center;
        }

        .header:hover {
            box-shadow: 0 0 10px 5px black;
            transform: scale(1.15);
            transition: 300ms;
        }

        .main {
            top: 90px;
            left: 10%;
            width: 1200px;
            height: 595px;
            box-shadow: 0 0 10px 5px rgba(16, 18, 30, 0.55);
            background-color: whitesmoke;
            font: 30px "Century Gothic";
            position: absolute;
        }

        input {
            text-align: center;
            width: 191px;
        }

        svg {
            width: 350px;
            height: 350px;
            position: absolute;
            left: 770px;
            top: 85px;
            border-radius: 20px 20px 20px 20px;
            border: 5px solid #a81111;
            transition: 200ms;
        }

        .forUsers {
            font: 25px "Century Gothic";
            height: 428px;
            width: 648px;
            top: 50px;
            left: 50px;
            color: #ecec97;
            position: absolute;
            background-color: #1b3370;
            box-shadow: 0 0 50px 10px rgba(34, 41, 121, 0.55);
            border-radius: 20px 20px 20px 20px;
            transition: 200ms;
        }

        .forUsers:hover {
            box-shadow: 0 0 50px 10px blue ;
            transition: 200ms;
            transform: scale(1.07);
        }

        .X_value {
            position: relative;
            margin-top: 60px;
            margin-left: 30px;
        }

        .Y_value {
            position: relative;
            margin-top: 55px;
            margin-left: 55px;
        }

        .R_value {
            position: relative;
            margin-top: 55px;
            margin-left: 100px;
        }

        #reset, #check {
            position: relative;
            width: 200px;
            height: 50px;
            top: 50px;
            border-radius: 20px 20px 20px 20px;
            font: 18px "Century Gothic";
            left: 10px;
            margin-left: 90px;
            transition: 200ms;
        }

        #check:hover, #reset:hover {
            box-shadow: 0 0 10px 5px whitesmoke;
            transform: scale(1.1);
            transition: 200ms;
        }

        #check:active, #reset:active {
            box-shadow: 0 0 10px 5px greenyellow;
            transition: 50ms;
        }

        svg:hover {
            box-shadow: 0 0 10px 5px red;
            transition: 200ms;
            transform: scale(1.2);
        }

        a:hover {
            transform: scale(1.2);
            transition: 200ms;
        }


        #R, #Y {
            text-align: center;
            position: absolute;
            border-radius: 20px 20px 20px 20px;
            height: 30px;
            outline: none;
            right: 50px;
        }

        #X {
            text-align: center;
            position: absolute;
            top: 6px;
            right: 15px;
            font-size: 18px;
        }

        #X > input[type=checkbox]:hover {
            box-shadow: 0 0 5px 2px white;
            transition: 200ms;
            transform: scale(2);
        }

        #X > input[type=checkbox]:checked {
            box-shadow: 0 0 5px 2px greenyellow;
            transition: 200ms;
        }

        #X_error, #Y_error, #R_error {
            position: absolute;
            color: #d31f1f;
            margin-top: 10px;
            width: 560px;
            height: 36px;
            left: 55px;
            text-align: center;
        }

        #picture_error {
            position: absolute;
            left: 730px;
            top: 485px;
            height: 36px;
            text-align: center;
            color: #d31f1f;
            width: 430px;
            font-size: 25px;
        }

        #results {
            max-width: 1200px;
            width: 1200px;
            top: 548px;
            height: 75px;
            position: absolute;
            background-color: whitesmoke;
            box-shadow: 0 18px 10px 5px rgba(16, 18, 30, 0.55);
            text-align: center;
            border-spacing: 60px 5px;
        }

        input[type=checkbox] {
            width: 10px;
            height: 10px;
            transform: scale(1.3);
        }

        input[type=text]:hover, input[type=text]:focus {
            box-shadow: 0 0 10px 5px white;
        }
    </style>
</head>
<body>

<!-- Шапка -->
<div class="header">
    <a href="https://github.com/KiVorobev" title="Go to the developer's github"
       style="text-decoration: none;color:#ecec97" ;>
        Vorobyev Kirill,P3231
    </a>
    <br/>Variant 95291
</div>

<!-- Основная часть -->
<div class="main">

    <form method="GET" id="form" name="form" onsubmit="return false;"
          action="${pageContext.request.contextPath}/processing">

        <!-- Блок взаимодействия с пользователем -->
        <div class="forUsers">

            <!-- Блок для значения X -->
            <div class="X_value">
                <text>Choose X coordinate:</text>
                <div id="X">
                    <input type="checkbox" name="X" value="-3">-3
                    <input type="checkbox" name="X" value="-2">-2
                    <input type="checkbox" name="X" value="-1">-1
                    <input type="checkbox" name="X" value="0"> 0
                    <input type="checkbox" name="X" value="1"> 1
                    <input type="checkbox" name="X" value="2"> 2
                    <input type="checkbox" name="X" value="3"> 3
                    <input type="checkbox" name="X" value="4"> 4
                    <input type="checkbox" name="X" value="5"> 5
                </div>
            </div>

            <!-- Блок ошибки для координаты X -->
            <div id="X_error"></div>

            <!-- Блок для значения Y -->
            <div class="Y_value">
                <text>Enter Y coordinate:</text>
                <input type="text" id="Y" name="Y" placeholder="Value (-5...3)" maxlength="8">
            </div>

            <!-- Блок ошибки для координаты Y -->
            <div id="Y_error"></div>

            <!-- Блок для значения R -->
            <div class="R_value">
                <text>Enter R value:</text>
                <input type="text" id="R" name="R" placeholder="Value (2...5)" maxlength="8">
            </div>

            <!-- Блок ошибки для значения R -->
            <div id="R_error"></div>

            <!-- Блок кнопок -->
            <div class="buttons">
                <input id="check" name="check" type="submit" value="Check">
                <input id="reset" name="reset" type="reset" value="Reset">
            </div>
        </div>
    </form>

    <!-- Блок графика -->
    <svg xmlns="http://www.w3.org/2000/svg" id="picture">

        <!-- Оси координат -->
        <line stroke="black" x1="0" y1="175" x2="350" y2="175"></line>
        <line stroke="black" x1="175" y1="0" x2="175" y2="350"></line>

        <!-- Стрелки к осям -->
        <polygon points="175,0 170,15 180,15" stroke="black"></polygon>
        <polygon points="350,175 335,170 335,180" stroke="black"></polygon>

        <!-- Значения на осях -->
        <text x="335" y="165" font-size="25">x</text>
        <text x="185" y="15" font-size="25">y</text>

        <!-- Метки на оси X -->
        <line stroke="black" x1="40" y1="170" x2="40" y2="180"></line>
        <line stroke="black" x1="110" y1="170" x2="110" y2="180"></line>
        <line stroke="black" x1="240" y1="170" x2="240" y2="180"></line>
        <line stroke="black" x1="310" y1="170" x2="310" y2="180"></line>

        <!-- Метки на оси Y -->
        <line stroke="black" x1="170" y1="40" x2="180" y2="40"></line>
        <line stroke="black" x1="170" y1="110" x2="180" y2="110"></line>
        <line stroke="black" x1="170" y1="240" x2="180" y2="240"></line>
        <line stroke="black" x1="170" y1="310" x2="180" y2="310"></line>

        <!-- Подписи к меткам на оси X -->
        <text x="35" y="160" font-size="20">-R</text>
        <text x="90" y="160" font-size="20">-R/2</text>
        <text x="225" y="160" font-size="20">R/2</text>
        <text x="305" y="160" font-size="20">R</text>

        <!-- Подписи к меткам на оси Y -->
        <text x="185" y="45" font-size="20">R</text>
        <text x="185" y="115" font-size="20">R/2</text>
        <text x="185" y="245" font-size="20">-R/2</text>
        <text x="185" y="315" font-size="20">-R</text>

        <!-- 2-я четверть -->
        <polygon points="110,175 175,175 175,40 110,40" fill="blue" fill-opacity="0.4"></polygon>

        <!-- 3-я четверть -->
        <polygon points="40,175 175,175 175,240" fill="blue" fill-opacity="0.4"></polygon>

        <!-- 4-я четверть -->
        <path fill="blue" fill-opacity="0.4"
              d="M240,175 A80,110 90 0,1 175,240 L 175,175 Z"></path>

        <!-- Добавление точек на координатную плоскость -->
        <%
            List<Bean> beanList = Data.getInstance().getBeanList();
            for (Bean nextBean : beanList) {
                double coordinateX = (nextBean.getX() * 135 / nextBean.getR()) + 175;
                double coordinateY = -(nextBean.getY() * 135 / nextBean.getR()) + 175;
                String color = (nextBean.isResult()) ? "red" : "#302929";
                out.println("<circle fill=\"" + color + "\" cx=\"" + coordinateX + "\" cy=\"" + coordinateY + "\"  r=\"5\"></circle>");
            }
        %>
    </svg>

    <!-- Блок ошибки выбора значений x и y на рисунке -->
    <div id="picture_error"></div>

    <!-- Блок таблицы результатов -->
    <div>
        <table id="results">
            <hr style="margin-top: 520px">
            <caption>Results:</caption>
            <thead>
            <td>X</td>
            <td>Y</td>
            <td>R</td>
            <td>Current time</td>
            <td>Execution time</td>
            <td>Hit</td>
            </thead>
            <tbody>
            <!-- Вывод результатов в таблицу -->
            <%
                for (Bean nextBean : beanList) {
                    out.println("<tr>");
                    out.println("<td style=\"max-width: 151px; word-wrap: break-word\";>" + nextBean.getX() + "</td>");
                    out.println("<td style=\"max-width: 151px; word-wrap: break-word\";>" + nextBean.getY() + "</td>");
                    out.println("<td style=\"max-width: 151px; word-wrap: break-word\";>" + nextBean.getR() + "</td>");
                    out.println("<td>" + nextBean.getCurrentTime() + "</td>");
                    out.println("<td>" + nextBean.getExecutionTime() + " ms</td>");
                    String color = (nextBean.isResult()) ? "#0fc40f" : "red";
                    out.println("<td style=\"color: " + color + "\">" + nextBean.isResult() + "</td>");
                    out.println("</tr>");
                }
            %>
            </tbody>
        </table>
    </div>
</div>
<script src="js/click.js"></script>
<script src="js/dots.js"></script>
<script src="js/sender.js"></script>
<script src="js/submit.js"></script>
<script src="js/switcher.js"></script>
<script src="js/table.js"></script>
<script src="js/validator.js"></script>
<script src="js/jquery-3.6.0.js"></script>
<script>
    $(document).on('click', 'svg', function (event) {
        checkClick(event);
    });
</script>
</body>
</html>