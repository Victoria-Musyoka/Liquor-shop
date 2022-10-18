import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
display: space-around;
background-color:blue;

`
const Wrapper = styled.div`
align-items: center;
justify-content: space-around;
display: flex;
padding: 10px 20px;
`

const Left = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex: 4;
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex: 4;
`
const MenuItem1= styled.div`
margin:2rem;
padding:5;
font-size:20px;
`
const MenuItem= styled.div`
margin:2rem;
padding:5;
font-size:20px;
`
const Logo = styled.h1`
  flex: 1.5;
  text-align: center;
`;

  const Header = ({liquorCount, user,setUser} ) => {

    const handleLogoutButton = () => {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    };

  
  return (
   
       <Container>
       <Wrapper>
       <Left>
      <Logo>Liquor Store</Logo>
      <h3>We have {liquorCount} liquor in stock!</h3>
      </Left>
      <Right>
      <MenuItem1>
        <button className="huma" style={{ margin:" 0 1rem 0 0",textDecoration:"none" ,border:"1px solid black",padding:"1px"}}><Link to ="/">Home</Link></button>
    
        
        </MenuItem1>
        {user ? (
              <MenuItem1>
              <button className="huma" style={{ margin:" 0 1rem 0 0",textDecoration:"none" ,border:"1px solid black",padding:"1px"}} onClick={handleLogoutButton}>Logout</button>
          
              
              </MenuItem1>
        )
      :(
        <MenuItem>
        <button className="regi" style={{ margin:" 0 1rem 0 0",textDecoration:"none" ,border:"1px solid black",padding:"1px"}}><Link to="/register">Register</Link></button>
    
        
        
        <button className="sigi" style={{ margin:" 0 1rem 0 0",textDecoration:"none" ,border:"1px solid black",padding:"1px"}}><Link to = "/signin">Sign in</Link></button>
        </MenuItem>
      )
      }
    
    
      </Right>
        
     

        </Wrapper>
      </Container>

 
  );
}

export default Header;
