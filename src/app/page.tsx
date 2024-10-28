"use client"

import { useContext } from "react"
import { webAppContext } from "./context"
import Image from "next/image"

export default function Home() {
	const app = useContext(webAppContext)
	if (!app.initDataUnsafe.user) {
		return <h1>Loading</h1>
	}
	return (
		<>
			{app.version ? (
				<div className='h-full w-full text-center pt-4'>
					<code className=''>{app.colorScheme}</code>
					<Image
						src={app.initDataUnsafe.user.photo_url || ""}
						alt={app.initDataUnsafe.user.first_name}
					/>
					<h3 className='font-bold mb-1 text-xl'>
						Welcome {app.initDataUnsafe.user.first_name}!
					</h3>
					<p>Ваш ИД:{app.initDataUnsafe.user.id}</p>
					<p>{app.initDataUnsafe.user.username}</p>
					<div className='font-medium text-sm text-center'>
						I&apos;m Mini App for Telegram
					</div>
					<a
						className='mt-6 block text-lg text-cyan-500 font-bold'
						href='https://t.me/thismisterit'>
						My Telegram Channel
					</a>
				</div>
			) : (
				"loading"
			)}
		</>
	)
}
