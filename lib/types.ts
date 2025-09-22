export type Resource = {
id: string;
name: string;
url: string;
category: string;
tags: string[];
pricing: string;
summary: string;
tutorial: string[];
useCases: string[];
skill: 'Beginner' | 'Intermediate' | 'Advanced';
timeToLearn: string;
badges: { ai?: boolean; trial?: boolean; beginnerFriendly?: boolean };
addedBy?: string;
addedAt?: string;
};
