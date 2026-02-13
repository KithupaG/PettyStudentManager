package jiat.ws.server;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import jiat.ws.dao.studentDAOImpl;
import jiat.ws.model.Student;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;


public class TaskHandler implements HttpHandler {
    private final studentDAOImpl dao = new studentDAOImpl();
    private final Gson gson = new Gson();

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        // CORS Handling for React Native Local Dev
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");

        if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
            exchange.sendResponseHeaders(204, -1);
            return;
        }

        String method = exchange.getRequestMethod();
        InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), "utf-8");
        BufferedReader br = new BufferedReader(isr);
        StringBuilder body = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) body.append(line);

        String response = "";
        try {
            if ("GET".equals(method)) {
                response = gson.toJson(dao.getAllStudents());
            } else if ("POST".equals(method)) {
                Student s = gson.fromJson(body.toString(), Student.class);
                dao.saveStudent(s);
                response = "{\"status\":\"saved\"}";
            } else if ("PUT".equals(method)) {
                Student s = gson.fromJson(body.toString(), Student.class);
                dao.updateStudent(s);
                response = "{\"status\":\"updated\"}";
            } else if ("DELETE".equals(method)) {
                String query = exchange.getRequestURI().getQuery();
                int id = Integer.parseInt(query.split("=")[1]);
                dao.deleteStudent(id);
                response = "{\"status\":\"deleted\"}";
            }
            exchange.sendResponseHeaders(200, response.getBytes().length);
        } catch (Exception e) {
            response = "{\"error\":\"" + e.getMessage() + "\"}";
            exchange.sendResponseHeaders(500, response.getBytes().length);
        }

        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}
