

/**
 *
 * @author patriqui_santos
 */public class AulaOperadores {

   
    public static void main(String[] args) {
        //ARITMÉTICOS
        
        int a = 10 + 1;
        int b = a +10;
        int c = b * 3;
        int d = c / 2;
        double e = 4.5 + 1.7;
        
        a += 10; // é a mesma coisa que a= a + 10;
        
       String mostrara = "o valor de a: " + a;
               System.out.println(mostrara);
               System.out.println("O valor de A: " + a);
                    
        
        
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println("O valor de e; "  + e);
        System.out.println(10 + 10); // aceita dessa forma sem colocar uma variável
        
        
        
      // LÓGICOS
      
      boolean ehmaior = 10 > 20;
      boolean ehMenor = 10 < 20;
      boolean ehMaiorIgual = 10 >= 20;
      boolean ehMenorIgual = 10 <= 20;
      boolean ehIgual = 10 == 10;
      boolean ehDiferente = 10 !=20;
      
        System.out.println(ehmaior);
        System.out.println(ehMenor);
        System.out.println(ehMaiorIgual);
        System.out.println(ehMenorIgual);
        System.out.println(ehIgual);
        System.out.println(ehDiferente);
        
        
      
      
         System.out.println(10 > 20 );
        if (10 > 20) {
        }
        
      // LÓGICOS
      
      boolean valor = (10 > 9) && (5 > 1);
      boolean valor1 = true && true;
      boolean valor2 = true && false;
      boolean valor3 = false || true;
      boolean valor4 = false || false;
      boolean valor5 = 10 >9 || 5 > 1;
      
      
      boolean negacao = !true;
      boolean negacao2 = !valor5;
      // exemplo de carregando em tela (!carregando)
     
      
        System.out.println(" o valor de valor5 é: " + valor5);
      
  
      
    }
    
}