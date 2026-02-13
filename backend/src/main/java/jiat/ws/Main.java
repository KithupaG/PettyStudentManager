package jiat.ws;

import jiat.ws.server.StudentWebSocketServer;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        new StudentWebSocketServer(8080).start();
    }
}