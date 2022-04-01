import Category from '../components/Category.js';
import CategorySelector from '../components/CategorySelector.js';
import RoleSelector from '../components/RoleSelector.js';
import { useState, useEffect } from 'react';
import Meta from '../components/Meta'


export default function Home({ roles, categories, cards, showRoleSelector, setShowRoleSelector, role, setRole, search}) {

  // const [role, setRole] = useState(null)

  // // https://developer.school/snippets/react/localstorage-is-not-defined-nextjs#why-does-this-happen
  // useEffect(() => {
  //   localStorage.getItem('role') ? setRole(localStorage.getItem('role')) : setRole(null)
  //   console.log(localStorage)
  //   // localStorage.setItem('role', "STU")
  //   // console.log(localStorage)


  //   // if (typeof window !== 'undefined') {
  //   //   console.log('You are on the browser')
  //   //   // 👉️ can use localStorage here
  //   // } else {
  //   //   console.log('You are on the server')
  //   //   // 👉️ can't use localStorage
  //   // }
  // }, [])

  return (
    <>
      <Meta title="Apps"/>

      {/* {role === null ? <RoleSelector roles={roles} /> : <></>} */}
      <RoleSelector roles={roles} showRoleSelector={showRoleSelector} setShowRoleSelector={setShowRoleSelector} setRole={setRole}/>
      <CategorySelector categories={categories} cards={cards} role={role} search={search}/>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* <div class="flex flex-wrap w-full "> */}
      {/* <div class="grid gap-4 grid-flow-col auto-cols-max w-full"> */}
      {/* <div class="flex flex-wrap gap-4 overflow-hidden"> */}
      {/* {console.log(tiles)} */}
    </>
  )
}


// Data
export async function getStaticProps() {
  const { roles, categories, cards } = await import('../db.json');


  return {
    props: {
      roles,
      categories,
      cards
    }
  }
}