import { css } from '../../styled-system/css';
import prisma from '@/lib/prisma';
import HomePage from './components/HomePage';

export default async function Home() {

  let userCount = await prisma.user.count()

  return (
    <>
    <HomePage></HomePage>
    </>
  )
}
