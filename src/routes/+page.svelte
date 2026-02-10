<svelte:head>
	<title>test</title>
</svelte:head>

<div class="top-content relative h-screen w-full">
	<img
		src="https://developer.atserver186.jp/_sys/image/1.jpg"
		alt="トップ画像"
		class="h-full w-full object-cover"
	/>
	<!--スクロールインジケーターを重ねる-->
	<div class="absolute right-0 bottom-6 z-10 md:right-6">
		<div id="scroll-wrapper">
			<div id="scroll-wrapper-inner">
				<div id="scroll-title">Scroll</div>
				<div id="scroll-down"></div>
			</div>
		</div>
	</div>
</div>

<main class="page-main mx-auto my-8 flex flex-col px-4">
	<article class="page-main-content">
		<p class="page-main-title">ニュース</p>
		<hr class="main-hr" />
		<p>test</p>
		<br />
		<p class="page-main-title">相互リンク</p>
		<hr class="main-hr" />
		<div class="main-link">
			<div class="link-2">
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://linkserver.jp/" target="_blank" rel="noopener noreferrer"
						><img src="https://linkserver.jp/banner.JPG" class="main-bunner-img" /><i
							class="fa-solid fa-up-right-from-square mr-1 text-xs"
						></i>Link2011さんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://256server.com/" target="_blank" rel="noopener noreferrer"
						><img
							src="https://256server.com/image/banner/256server.png"
							class="main-bunner-img"
						/><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>256大好きさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://www.kaerubasyo.com/" target="_blank" rel="noopener noreferrer"
						><img
							src="https://lh3.googleusercontent.com/sitesv/APaQ0SToLELmLZPYsN8yqW8V3jx-_WV8b62GjeCOJC0y6DH-SsZZ77hd1yn62s_iilFl4cLxDbtIAfQepXgfeLOqaAoVfWK8yxbzXZAjMs3O7hKOAqOIFFDai2DB20vawW4fhotFYMI5rOhTA_tBGJLSlv_q3ICBm7L8XxR9tQJMsZOb5IBZfuRS1jDQNlbjPKsGT8FZYILgwDeRpV005Ac6QfXeLaXItiuFJZGC=w1280"
							class="main-bunner-img"
						/><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>kaeruさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://umaii.f5.si/" target="_blank" rel="noopener noreferrer"
						><img src="https://umaii.f5.si/img/banner.png" class="main-bunner-img" /><i
							class="fa-solid fa-up-right-from-square mr-1 text-xs"
						></i>うまいだんごさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://pusyuuwanko.com/" target="_blank" rel="noopener noreferrer"
						><img src="https://pusyuuwanko.com/pusyuusystem/images/pw-banner.png" class="main-bunner-img" /><i
							class="fa-solid fa-up-right-from-square mr-1 text-xs"
						></i>プシューさんのサイト</a
					>
				</div>
			</div>
			<div class="link-2">
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://ilovejunkpcnico.netlify.app/" target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>ニコさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://senpai114514.icu/index.html" target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>bilithispcさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://mellllonsoda-server.com/s" target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"
						></i>めろんそーだーさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://atuatu-hhakumai.github.io/" target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>ぁぁぁあぁさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://home.seutacloud.com/" target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>Cloverさんのサイト</a
					>
				</div>
				<div class="mb-5 border-l-2 border-white pl-2 text-sm">
					<a href="https://nanasi-rasi.net/" target="_blank"
						><i class="fa-solid fa-up-right-from-square mr-1 text-xs"></i>ななしぃさんのサイト</a
					>
				</div>
			</div>
		</div>

		<a class="link-hover" href="https://atserver186.jp/Service/banner/" target="_blank"
			>ATSのバナー</a
		>
		<br />
		<br />
		<p class="page-main-title">アクセスカウンター</p>
		<hr class="main-hr" />
		<img
			src="https://moecounter.atserver186.jp/@atserver-dev?name=ATShift&theme=original-old&padding=8&offset=0&align=top&scale=1&pixelated=1&darkmode=0"
			alt="access_counter"
			class="main-ac"
		/>
	</article>
</main>
