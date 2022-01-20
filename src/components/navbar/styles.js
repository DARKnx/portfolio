import styled from "styled-components";




export const Container = styled.header`
 
* {
    margin: 0;
    padding: 200;
   
}
a {
    color: ${({theme}) => theme.colors.white};
    text-decoration: none; 
    transition: 0.3s;
    overflow: hidden;
    position: relative;
    display: inline-block;
    opacity: 0.8;


   &::after{
       content:"";
       width: 0%;
       height: 1.5px;
       position: absolute;
       background: linear-gradient(90deg,transparent, ${({theme}) => theme.colors.secondary});;
       left: 0;
       bottom: 0;
       transition: 0.5s ease-in-out;

      
   }

    &:hover{
        color: #FFF;

        ::after{
            width: 100%;
        }
    }

}

.logo {
    margin-left: 80;
    padding-right: 300px;
    font-size: 26px;
    text-transform: uppercase;
    letter-spacing: 4px;

    &::after {
        display: none;
    }
}
nav {
display: flex;
justify-content: space-around;

align-items: center;
background: ${({theme}) => theme.colors.primary};
height: 8vh;
border-bottom: 1px solid rgba(255, 255, 255, 0.096);
}
.navlist {
    list-style: none;
    display: flex;
    li {
        font-weight: 500;
        letter-spacing: 3px;
        margin-left: 32px;
       }
}
.mobilemenu{
cursor: pointer;
display: none;
    div {
    width: 32px;
    height: 2px;
    background: #FFF;
    margin: 8px;
    }
}
@media (max-width: 999px){
 
       
        
    
     .navlist{
         position: absolute;
         top: 8vh;
         right: 0%;
         width: 40vw;
         height: 60vh;
         background: ${({theme}) => theme.colors.primary};
         flex-direction: column;
         align-items: center;
         justify-content: space-around;
         opacity: 0;
         border: 1px solid rgba(255, 255, 255, 0.030);
           
           li {
               margin-left: 0;
           }
          
        }
        .navlist.active {
               transition: 0.5s;
               opacity: 1;
               z-index: 5000;
           
        }
        .mobilemenu {
            display: block;
        }
}
.mobilemenu.active {
              .line1{
                transition: 0.6s;
                  transform: rotate(-45deg) translate(-8px, 8px) ;
              }
              .line3{
                transition: 0.6s;
                  transform: rotate(45deg) translate(-5px, -7px) ;
              }
              .line2{
                 opacity: 0;
              }
           
        }
`
