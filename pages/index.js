import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

function HomePage() {
  return <div>
  	Welcome to Next.js!
  	<Link href={{ pathname: '/about', query: { name: 'abc' }}}>
      <a>to about</a>
    </Link>
    <br/>
  	<Button onClick={(e) => {
			Router.push({
		    pathname: '/about',
		    query: { name: 'abc' },
		  })
		}} >click</Button>
  </div>
}

export default HomePage