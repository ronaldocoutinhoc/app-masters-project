"use client";

import React from 'react';
import { Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.css'
import { ArrowRightOutlined } from '@ant-design/icons';


const { Title, Paragraph } = Typography;

export default function HomePage() {
    const router = useRouter();
    const { t } = useTranslation();

    const handleAnalyzeClick = () => {
        router.push('/analyze-job');
    };

    const instructionStyle = { "fontSize": '1.2rem' }

    return (

        <div className={styles.container}>
            <div className={styles.textContainer}>

                <Title>{t('homeTitle')}</Title>
                <Paragraph style={{ fontSize: '1.5rem' }}>
                    {t('homeDescription')}
                </Paragraph>

                <Title level={3}>{t('instructionsTitle')}</Title>
                <div style={{ textAlign: 'left' }}>
                    <Paragraph style={instructionStyle}>{t('instruction1')}</Paragraph>
                    <Paragraph style={instructionStyle}>{t('instruction2')}</Paragraph>
                    <Paragraph style={instructionStyle}>{t('instruction3')}</Paragraph>
                    <Paragraph style={instructionStyle}>{t('instruction4')}</Paragraph>
                    <Paragraph style={instructionStyle}>{t('instruction5')}</Paragraph>
                </div>

                <Button type="primary" onClick={handleAnalyzeClick} style={{ width: '100%', height: "3rem", fontSize: '1.5rem' }}>
                    {t('analyzeNow')}<ArrowRightOutlined />
                </Button>
            </div>
        </div>

    );
}
