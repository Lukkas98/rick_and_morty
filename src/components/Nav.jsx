import styled from "styled-components";
import SearchBar from "./SearchBar";


const Navbar = styled.nav`
    margin: 10px 20px;
    display: flex;
    justify-content: center;
`



export default function Nav({ onSearch }){

    return(
        <>
        <Navbar>
            <SearchBar onSearch={onSearch}/> 
        </Navbar>
        </>
    )
}