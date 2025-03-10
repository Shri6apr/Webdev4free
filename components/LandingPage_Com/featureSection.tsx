"use client";

import { Check } from "lucide-react";
import Link from 'next/link';

export function FeaturesSection() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-12">Features</h2>
                        <ul className="space-y-4">
                            <FeatureItem href="/fullstack">100% Free 11-Week Bootcamp</FeatureItem>
                            <FeatureItem>Curated content from various YouTube creators</FeatureItem>
                            <FeatureItem>Structured learning path for beginners</FeatureItem>
                            <FeatureItem>Focus on practical, industry-relevant skills</FeatureItem>
                            <FeatureItem>No CS degree is required</FeatureItem>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-12">Why This Course?</h2>
                        <ul className="space-y-4">
                            <FeatureItem>Learn the basics for free before investing in expensive courses</FeatureItem>
                            <FeatureItem>Structured approach to web development learning</FeatureItem>
                            <FeatureItem>Aims to help learners earn their first tech salary</FeatureItem>
                            <FeatureItem>Provides a foundation for further specialized learning</FeatureItem>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ children, href }: { children: React.ReactNode, href?: string }) {
    // For items with href, use a fully clickable link component
    if (href) {
        return (
            <li>
                <Link href={href} className="flex items-center space-x-3 justify-center cursor-pointer hover:text-green-500 transition-colors">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{children}</span>
                </Link>
            </li>
        );
    }
    
    // For items without href, just display the content
    return (
        <li className="flex items-center space-x-3 justify-center">
            <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
            <span>{children}</span>
        </li>
    );
}   