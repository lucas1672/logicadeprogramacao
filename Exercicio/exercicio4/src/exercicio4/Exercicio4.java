/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exercicio4;

import java.awt.BorderLayout;
import java.util.Scanner;

/**
 *
 * @author lucas_benevenuto
 */
public class Exercicio4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
   Scanner s = new Scanner(System.in);
        
       System.out.println("digite o total eleitores");
        double totaleleitores = s.nextInt();
        System.out.println("digite qtd votos nulo");
        double nulo = s.nextInt();
        System.out.println("digite qtd branco");
        double branco = s.nextInt();
        System.out.println("digite qtd votos valido");
       int validos = s.nextInt();
        
        Double nulopercentual = (nulo/eleitores)*100;
        double brancopercentual = (branco/eleitores)*100;
        double validopercentual = (valido/ eleitores)*100;
        
        System.out.println("porcentagem nulo:"+nuloporcentual"%");
        System.out.println("porcentagem branco"+brancopercentual"%");
        System.out.println("porcentagem valido"+validopercentual)"%";
    }
    
}
