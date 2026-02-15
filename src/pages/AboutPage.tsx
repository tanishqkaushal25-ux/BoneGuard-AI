import React from 'react';
import { Cpu, Users, ShieldAlert } from 'lucide-react';
import { Card } from '../components/UI';

const AboutPage = () => {
    const sections = [
        {
            title: "How It Works",
            icon: <Cpu className="w-6 h-6 text-blue-600" />,
            content: "The system uses a convolutional neural network (CNN) trained on annotated bone X-ray datasets. When an image is uploaded, the model processes it through multiple layers of feature extraction to identify patterns associated with bone malignancies, producing a classification result and confidence score."
        },
        {
            title: "Who It's For",
            icon: <Users className="w-6 h-6 text-blue-600" />,
            content: "BoneGuard AI is designed for radiologists, orthopedic specialists, diagnostic laboratories, and hospitals seeking AI-augmented screening capabilities. It serves as a second-opinion tool to support — not replace — clinical expertise."
        },
        {
            title: "Important Notice",
            icon: <ShieldAlert className="w-6 h-6 text-blue-600" />,
            content: "This project is developed for academic and research purposes. It is not a certified medical device. All predictions should be reviewed by qualified healthcare professionals before any clinical decisions are made."
        }
    ];

    return (
        <div className="py-20 px-4 max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight">About BoneGuard AI</h1>
                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                    BoneGuard AI is an academic research project that leverages deep learning to assist
                    medical professionals in screening bone X-ray images for potential cancer indicators.
                </p>
            </div>

            <div className="space-y-6">
                {sections.map((section, index) => (
                    <Card key={index} className="p-8 border-slate-100 hover:border-blue-100 transition-colors shadow-sm bg-white">
                        <div className="flex gap-6 items-start">
                            <div className="bg-blue-50 p-4 rounded-2xl flex-shrink-0">
                                {section.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-base">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;
