import java.io.*;

public class pipeline {
    public static void main(String[] args) {
        try {
            Runtime run = Runtime.getRuntime();
            Process proc = run.exec("npm.cmd install");
            InputStream stdin = proc.getInputStream();
            InputStreamReader isr = new InputStreamReader(stdin);
            BufferedReader br = new BufferedReader(isr);
            String line = null;
            while ( (line = br.readLine()) != null)
                System.out.println(line);
            proc = run.exec("npm.cmd run build");
            stdin = proc.getInputStream();
            isr = new InputStreamReader(stdin);
            br = new BufferedReader(isr);
            line = null;
            while ( (line = br.readLine()) != null)
                System.out.println(line);
        } catch (Exception e) {
            System.err.println(e);
        }
    }
}