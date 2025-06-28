export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    { 
        id: "software-proposal", 
        label: "Software development Proposal",  
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <h2>Project Overview</h2>
            <p>This document outlines the proposed software development project including objectives, scope, timeline, and deliverables.</p>
            
            <h2>Project Objectives</h2>
            <ul>
                <li>Objective 1</li>
                <li>Objective 2</li>
                <li>Objective 3</li>
            </ul>
            
            <h2>Technical Requirements</h2>
            <p>Detailed technical specifications and requirements for the software solution.</p>
            
            <h2>Timeline</h2>
            <p>Project timeline with key milestones and deliverables.</p>
            
            <h2>Budget</h2>
            <p>Estimated costs and resource allocation for the project.</p>
        `
    },
    { 
        id: "project-proposal", 
        label: "Project Proposal",  
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <h2>Executive Summary</h2>
            <p>A brief overview of the project, its goals, and expected outcomes.</p>
            
            <h2>Project Background</h2>
            <p>Context and background information that led to this project proposal.</p>
            
            <h2>Project Goals</h2>
            <ul>
                <li>Primary Goal</li>
                <li>Secondary Goal</li>
                <li>Success Metrics</li>
            </ul>
            
            <h2>Methodology</h2>
            <p>Approach and methodology to be used for project execution.</p>
            
            <h2>Timeline and Milestones</h2>
            <p>Detailed project timeline with key milestones and deliverables.</p>
            
            <h2>Budget and Resources</h2>
            <p>Financial requirements and resource allocation for the project.</p>
            
            <h2>Risk Assessment</h2>
            <p>Potential risks and mitigation strategies.</p>
        `
    },
    { 
        id: "business-letter",  
        label: "Business Letter",  
        imageUrl: "/business-letter.svg",
        initialContent: `
            <div style="margin-bottom: 20px;">
                <p>[Your Name]<br>
                [Your Title]<br>
                [Company Name]<br>
                [Address Line 1]<br>
                [Address Line 2]<br>
                [City, State ZIP Code]<br>
                [Phone Number]<br>
                [Email Address]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>[Date]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>[Recipient Name]<br>
                [Recipient Title]<br>
                [Company Name]<br>
                [Address Line 1]<br>
                [Address Line 2]<br>
                [City, State ZIP Code]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>Dear [Recipient Name],</p>
            </div>
            
            <p>[Opening paragraph - Introduce yourself and state the purpose of the letter]</p>
            
            <p>[Body paragraph(s) - Provide details, explanations, or requests]</p>
            
            <p>[Closing paragraph - Summarize key points and state next steps]</p>
            
            <div style="margin-top: 20px;">
                <p>Sincerely,<br>
                [Your Name]<br>
                [Your Title]</p>
            </div>
        `
    },
    { 
        id: "resume",  
        label: "Resume",  
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>[Your Name]</h1>
            <p>[Email] | [Phone] | [Location] | [LinkedIn]</p>
            
            <h2>Professional Summary</h2>
            <p>Experienced professional with [X] years of expertise in [field/industry]. Proven track record of [key achievements or skills].</p>
            
            <h2>Work Experience</h2>
            <h3>[Job Title] - [Company Name]</h3>
            <p><em>[Start Date] - [End Date]</em></p>
            <ul>
                <li>Key achievement or responsibility</li>
                <li>Key achievement or responsibility</li>
                <li>Key achievement or responsibility</li>
            </ul>
            
            <h3>[Previous Job Title] - [Previous Company]</h3>
            <p><em>[Start Date] - [End Date]</em></p>
            <ul>
                <li>Key achievement or responsibility</li>
                <li>Key achievement or responsibility</li>
                <li>Key achievement or responsibility</li>
            </ul>
            
            <h2>Education</h2>
            <h3>[Degree Name] - [University Name]</h3>
            <p><em>[Graduation Year]</em></p>
            <p>Relevant coursework: [Course 1], [Course 2], [Course 3]</p>
            
            <h2>Skills</h2>
            <p><strong>Technical Skills:</strong> [Skill 1], [Skill 2], [Skill 3], [Skill 4]</p>
            <p><strong>Soft Skills:</strong> [Skill 1], [Skill 2], [Skill 3]</p>
            
            <h2>Certifications</h2>
            <ul>
                <li>[Certification Name] - [Issuing Organization] ([Year])</li>
                <li>[Certification Name] - [Issuing Organization] ([Year])</li>
            </ul>
        `
    },
    { 
        id: "cover-letter",   
        label: "Cover Letter",   
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <div style="margin-bottom: 20px;">
                <p>[Your Name]<br>
                [Your Address]<br>
                [City, State ZIP Code]<br>
                [Phone Number]<br>
                [Email Address]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>[Date]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>[Hiring Manager Name]<br>
                [Company Name]<br>
                [Company Address]<br>
                [City, State ZIP Code]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>Dear [Hiring Manager Name],</p>
            </div>
            
            <p>I am writing to express my strong interest in the [Position Title] position at [Company Name]. With my background in [relevant field/experience], I am confident in my ability to contribute effectively to your team.</p>
            
            <p>In my current role as [Current Position] at [Current Company], I have developed expertise in [relevant skills/experiences]. I have successfully [specific achievement or project] that demonstrates my ability to [relevant skill or quality].</p>
            
            <p>I am particularly drawn to [Company Name] because of [specific reason - company values, projects, culture, etc.]. I believe my [specific skill or experience] would be valuable in helping [Company Name] achieve [specific goal or project].</p>
            
            <p>I am excited about the opportunity to discuss how my skills and experience align with the needs of your team. Thank you for considering my application. I look forward to the possibility of contributing to [Company Name] and would welcome the opportunity to discuss this position further.</p>
            
            <div style="margin-top: 20px;">
                <p>Sincerely,<br>
                [Your Name]</p>
            </div>
        `
    },
    { 
        id: "letter",   
        label: "Letter",   
        imageUrl: "/letter.svg",
        initialContent: `
            <div style="margin-bottom: 20px;">
                <p>[Your Name]<br>
                [Your Address]<br>
                [City, State ZIP Code]<br>
                [Date]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>[Recipient Name]<br>
                [Recipient Address]<br>
                [City, State ZIP Code]</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p>Dear [Recipient Name],</p>
            </div>
            
            <p>[Opening paragraph - Introduce the topic or purpose of your letter]</p>
            
            <p>[Body paragraph(s) - Provide details, explanations, or share information]</p>
            
            <p>[Additional paragraphs as needed - Continue with your message]</p>
            
            <p>[Closing paragraph - Summarize your main points and express any closing thoughts]</p>
            
            <div style="margin-top: 20px;">
                <p>Best regards,<br>
                [Your Name]</p>
            </div>
        `
    },
]