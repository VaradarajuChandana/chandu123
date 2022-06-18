public class pattern {
    public static void main(String[] args){
        for(int i=0;i<5;i++){
            for(int j=0;j<5;j++){
                if(i==0 || j==7/2){
                    System.out.print("* "+" ");
                }
                else{
                    System.out.print(" "+" ");
                }

            }
       System.out.println();
        }
    

        for(int i=0;i<7;i++){
            for(int j=0;j<5;j++){
                if(i%3==0 || j==0){
                    System.out.print("*"+" ");
                }
                 else{
                    System.out.print(" ");
               }
            }
           System.out.println();
            
    
        }

        for(int i=0;i<4;i++){
            System.out.println("*");
            for(int j=0;j<=4;j++){
                if(i==4-1){
                    System.out.print("*  ");
                }
                 else{
                    System.out.print(" ");
               }
            }
           System.out.println();
            
    
        }

        for(int i=0;i<7;i++){
            for(int j=0;j<7;j++){
                if((j==0 || j==6) && i<5||i-j==4||i+j==10||i*j==18){
                    System.out.print("*"+" ");
                }
                 else{
                    System.out.print(" "+" ");
               }
            }
           System.out.println();
            
    
        }
    
        for(int i=-2;i<7;i++){

            for(int j=0;j<5;j++){
                if(j==i || ((i==-2||i==6)&&j%4!=0)||((i==-1||i==5)&&j%4==0)){
                    System.out.print("*"+" ");
                }
                 else{
                    System.out.print(" "+" ");
               }
            }
           System.out.println();
            
    
        }
        for(int i=0;i<7;i++){
            for(int j=0;j<4;j++){
                if(j==0 || i==(3-j)||i==(3+j)){
                    System.out.print(" "+"*");
                }
                 else{
                    System.out.print(" ");
               }
            }
           System.out.println();
            
    
        }
    
        for(int i=1;i<8;i++){
            for(int j=1;j<8;j++){
                if(i+j==4 || i*j==4||j-i==4||i-j==4||i*j==28||i+j==12){
                    System.out.print("*"+" ");
                }
                 else{
                    System.out.print(" "+" ");
               }
            }
           System.out.println();
            
    
        }
       // System.out.println();
    }
}

    

    

    



    
    





    



            
    

        
        
    
    
    
    

