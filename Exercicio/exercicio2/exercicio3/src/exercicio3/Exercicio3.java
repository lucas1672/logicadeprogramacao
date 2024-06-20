/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exercicio3;

import java.util.Scanner;

/**
 *
 * @author lucas_benevenuto
 */
public class Exercicio3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    Scanner s = new Scanner(System.in);
        System.out.println("digite qtd de ano:");
        int ano = s.nextInt();
        System.out.println("digite qtd de meses:");
        int meses = s.nextInt();
        System.out.println("digite qtd d dia:");
        int dias = s.nextInt();
         int totaldias = (ano * 365)+ (meses * 30) + dias;
         System.out.println("voce viveu "+ totaldias + "dias.");
    }
    
}
