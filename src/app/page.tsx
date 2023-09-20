import { css } from '../../styled-system/css';
import prisma from '@/lib/prisma';

export default async function Home() {

  let userCount = await prisma.user.count()

  return (
    <>
    <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>

    <div>
      User count: {userCount}
    </div>

    </>
  )
}
