"use client";

import React, { useEffect, useState } from 'react';
import { Layout, Menu, ConfigProvider, theme } from 'antd';
import { BulbOutlined, BulbFilled, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './globals.css';
import styles from './page.module.css';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { usePathname, useRouter } from 'next/navigation';


const { Header, Content, Footer } = Layout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [darkTheme, setDarkTheme] = useState(true);
	const router = useRouter();
	const [selectedPage, setSelectedPage] = useState("home");
	const [language, setLanguage] = useState('en');
	const { t } = useTranslation();
	const pathname = (usePathname() || "/home").split("/")[1];
	console.log(pathname)
	const toggleTheme = () => {
		setDarkTheme(!darkTheme);
	};

	const toggleLanguage = () => {
		const newLanguage = language === 'en' ? 'pt' : 'en';
		setLanguage(newLanguage);
		i18n.changeLanguage(newLanguage);
	};


	const handleNavigation = (page: string) => {;
		router.push(`/${page}`);
	}
	

	return (
		<html lang={language}>
			<body>
				<ConfigProvider
					theme={{
						algorithm: darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
						components: {
							Layout: {
								footerBg: darkTheme ? '#141414' : '#ffffff'
							}
						}
					}}
				>
					<Layout style={{ minHeight: '100vh' }}>
						<Header style={{ padding: 0 }}>
							<Menu mode="horizontal" selectedKeys={[pathname]} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
								<Menu.Item key="home" onClick={() => handleNavigation('home')}>
									{t('home')}
								</Menu.Item>
								<Menu.Item key="analyze-job" onClick={() => handleNavigation('analyze-job')}>
									{t('analyze')}
								</Menu.Item>
								<Menu.Item key="themeToggle" onClick={toggleTheme} style={{ position: 'absolute', right: '50px', top: 0 }}>
									{darkTheme ? <BulbOutlined /> : <BulbFilled />}
									{darkTheme ? t('darkTheme') : t('lightTheme')}
								</Menu.Item>
								<Menu.Item key="languageToggle" onClick={toggleLanguage} style={{ position: 'absolute', right: 0 }}>
									{language === 'en' ? 'EN' : 'PT'}
								</Menu.Item>
							</Menu>
						</Header>
						<Content className={styles.content}>
							{children}
						</Content>
						<Footer style={{ textAlign: 'center', padding: '20px' }}>
							<p>{t('designedBy')}</p>
							<p>
								<a href="https://github.com/ronaldocoutinhoc" target="_blank" rel="noopener noreferrer">
									<GithubOutlined style={{ fontSize: '24px', margin: '0 10px' }} />
								</a>
								<a href="https://www.linkedin.com/in/ronaldo-coutinho-187265205/" target="_blank" rel="noopener noreferrer">
									<LinkedinOutlined style={{ fontSize: '24px', margin: '0 10px' }} />
								</a>
							</p>
						</Footer>
					</Layout>
				</ConfigProvider>
			</body>
		</html>
	);
}