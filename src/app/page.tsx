import { css } from '../../styled-system/css';
import prisma from '@/lib/prisma';
import HomePage from './components/HomePage';

export default async function Home() {

  return (
    <>
    <HomePage></HomePage>
    </>
  )
}
