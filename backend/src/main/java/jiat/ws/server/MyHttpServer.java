package jiat.ws.server;

import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;

public class MyHttpServer {
    public static void startServer() {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
            server.createContext("/api/students", new TaskHandler());
            server.setExecutor(null);
            server.start();
            System.out.println("Backend started on port 8080...");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}