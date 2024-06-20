/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exercicio5;

import java.util.Scanner;

/**
 *
 * @author lucas_benevenuto
 */
public class Exercicio5 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    Scanner s = new Scanner(System.in);
     
        System.out.println("informe a temperatura em c:");
     double celsius = s.nextInt();
     
     double farenhait = (1.8*celsius) + 32;
     double kelvin = celsius + 273.15;
     
        System.out.println("celsius:"+celsius +"c");
        System.out.println("farenhait:"+farenhait +"f");
        System.out.println("kelvin:"+kelvin +"k");
    }
    
}
