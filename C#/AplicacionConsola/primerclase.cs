using System;

    //Definición de la clase base para la solución
    public class MiPrimeraAplicacionPuntoNet
    {
        static void Main(string [] args)
        {   
            int numero = 0;
            float valorFlotante = 0;
            string cadena = "";
            Console.WriteLine("Mi primera aplicación de C#");

            numero = System.Int32.Parse(System.Console.ReadLine());

            //Int32.Parse o Convert.ToInt32 --> Integer.parseInt

            valorFlotante = float.Parse(System.Console.ReadLine());
            cadena = System.Console.ReadLine();
            //System.Console.ReadLine()--> System.in.readline()
            System.Console.WriteLine("El numero leido fue: " + numero);
            
            System.Console.WriteLine("El numero  real leido fue: " + valorFlotante);
            System.Console.Read();

        }
    } //Fin de la clase
