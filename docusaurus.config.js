// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Crecimiento',
	tagline: 'The Argentina Opportunity',
	url: 'https://docs.crecimiento.ar',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es']
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/crecimientoar/docs'
				},
				blog: {
					showReadingTime: true,
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/crecimientoar/docs'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Crecimiento',
				logo: {
					alt: 'Crecimiento Logo',
					src: 'img/logo.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Crecimiento'
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/crecimientoar/docs',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Crecimiento',
								to: '/docs/intro'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Telegram',
								href: 'https://t.me/+4hL7Vc7llSoxOWRk'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/crecimientoar/docs'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Crecimiento, built by the community 🇦🇷`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
}

module.exports = config
