import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-js'
import {Container} from '@mui/material'
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
      <title> Flashcard Saas</title> 
      <meta name = "description" content = "Create flashcard from your text"/>      
 
    </Head>
    </Container>
    
      );
}
