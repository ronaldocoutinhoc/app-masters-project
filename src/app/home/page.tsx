"use client";


import React from 'react';
import { Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

export default function HomePage() {
    const router = useRouter();
    const { t } = useTranslation();

    const handleAnalyzeClick = () => {
        router.push('/analyze-job');
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <Title>{t('homeTitle')}</Title>
            <Paragraph>{t('homeDescription')}</Paragraph>
            <Button type="primary" onClick={handleAnalyzeClick}>
                {t('analyzeNow')}
            </Button>
        </div>
    );
}
