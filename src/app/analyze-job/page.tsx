"use client";

import React, { useState } from 'react';
import { Input, Button, Typography, message, Card, Select, Form } from 'antd';
import ReactMarkdown from 'react-markdown';
import styles from './AnalyzeJobPage.module.css';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

export default function AnalyzeJobPage() {
    const [jobDescription, setJobDescription] = useState('');
    const [currentLevel, setCurrentLevel] = useState('');
    const [stack, setStack] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');

    const { t, i18n } = useTranslation();
    const language = i18n.language;

    const handleAnalyzeClick = async () => {
        if (!jobDescription) {
            message.warning(t('enterJobDescription'));
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('/api/analyze-job', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    jobDescription, 
                    currentLevel, 
                    stack, 
                    technologies, 
                    language 
                }),
            });

            if (!response.ok) {
                throw new Error('Error calling API');
            }

            const data = await response.json();
            setResult(data.completion);
        } catch (error) {
            message.error(t('analysisError'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <Title level={2}>{t('describeJob')}</Title>
            <Form layout="vertical" style={{ width: '100%' }}>
                <Form.Item
                    label={t('jobDescriptionLabel')}
                    name="jobDescription"
                    rules={[{ required: true, message: t('enterJobDescription') }]} // Adiciona validação obrigatória
                >
                    <TextArea
                        rows={10}
                        placeholder={t('pasteJobDescription')}
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={t('currentLevel')}>
                    <Select 
                        value={currentLevel} 
                        onChange={(value) => setCurrentLevel(value)} 
                        placeholder={t('selectCurrentLevel')}
                    >
                        <Option value="beginner">{t('beginner')}</Option>
                        <Option value="junior">{t('junior')}</Option>
                        <Option value="mid">{t('mid')}</Option>
                        <Option value="senior">{t('senior')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item label={t('stack')}>
                    <TextArea
                        rows={4}
                        placeholder={t('enterStacks')}
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={t('technologies')}>
                    <TextArea
                        rows={4}
                        placeholder={t('enterTechnologies')}
                        value={technologies}
                        onChange={(e) => setTechnologies(e.target.value)}
                    />
                </Form.Item>
                <Form.Item style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        onClick={handleAnalyzeClick}
                        loading={loading}
                        style={{ width: '10rem', height: '3rem', fontSize: '1.5rem' }}
                    >
                        {t('analyze')}
                    </Button>
                </Form.Item>
            </Form>
            <div className={styles.markdownContainer}>
                {result && (
                    <Card
                        title={t('analyzeResult')}
                        style={{ borderRadius: '4px' }}
                    >
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </Card>
                )}
            </div>
        </div>
    );
}
