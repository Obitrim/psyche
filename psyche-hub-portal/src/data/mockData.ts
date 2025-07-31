
import { Article, Author, Category, Psychologist, Tag } from "@/types";

export const authors: Author[] = [
  {
    id: "1",
    name: "Dr. Emily Johnson",
    bio: "Clinical psychologist specializing in anxiety and depression treatment with 15+ years of experience.",
    avatar: "/psychologist1.jpg",
    role: "psychologist",
    verified: true,
    specialties: ["Anxiety", "Depression", "Trauma"]
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    bio: "Cognitive behavioral therapist with expertise in relationship counseling and stress management.",
    avatar: "/psychologist2.jpg",
    role: "psychologist",
    verified: true,
    specialties: ["CBT", "Relationships", "Stress Management"]
  },
  {
    id: "3",
    name: "Sarah Parker, MA",
    bio: "Child psychologist focused on developmental disorders and early intervention strategies.",
    avatar: "/psychologist3.jpg",
    role: "psychologist",
    verified: true,
    specialties: ["Child Psychology", "Developmental Disorders"]
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    bio: "Neuropsychologist researching connections between brain function and mental health.",
    avatar: "/psychologist4.jpg",
    role: "admin",
    verified: true,
    specialties: ["Neuropsychology", "Research"]
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Anxiety",
    slug: "anxiety",
    description: "Articles about anxiety disorders, treatments, and coping strategies."
  },
  {
    id: "2",
    name: "Depression",
    slug: "depression",
    description: "Resources for understanding and managing depression."
  },
  {
    id: "3",
    name: "Relationships",
    slug: "relationships",
    description: "Insights on building and maintaining healthy relationships."
  },
  {
    id: "4",
    name: "Self-Care",
    slug: "self-care",
    description: "Practices for maintaining mental health and wellbeing."
  },
  {
    id: "5",
    name: "Trauma",
    slug: "trauma",
    description: "Understanding trauma and approaches to healing."
  },
  {
    id: "6",
    name: "Sleep",
    slug: "sleep",
    description: "Information about sleep disorders and improving sleep quality."
  }
];

export const tags: Tag[] = [
  { id: "1", name: "Mindfulness", slug: "mindfulness" },
  { id: "2", name: "Therapy", slug: "therapy" },
  { id: "3", name: "Mental Health", slug: "mental-health" },
  { id: "4", name: "Wellness", slug: "wellness" },
  { id: "5", name: "Stress", slug: "stress" },
  { id: "6", name: "CBT", slug: "cbt" },
  { id: "7", name: "Meditation", slug: "meditation" },
  { id: "8", name: "Self-Help", slug: "self-help" },
  { id: "9", name: "Parenting", slug: "parenting" },
  { id: "10", name: "Research", slug: "research" }
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Understanding Anxiety: Causes, Symptoms, and Treatments",
    slug: "understanding-anxiety-causes-symptoms-treatments",
    excerpt: "Learn about the biological and environmental factors that contribute to anxiety disorders and effective treatment approaches.",
    content: `
# Understanding Anxiety: Causes, Symptoms, and Treatments

Anxiety is more than just feeling stressed or worried. It's a common mental health condition that affects millions of people worldwide. This article explores the causes, symptoms, and treatments for anxiety disorders.

## What is Anxiety?

Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. However, if your feelings of anxiety are extreme, last for longer than six months, and are interfering with your life, you may have an anxiety disorder.

## Common Symptoms of Anxiety

Anxiety manifests differently in different people, but common symptoms include:

- Feeling restless, wound-up, or on-edge
- Being easily fatigued
- Having difficulty concentrating
- Experiencing irritability
- Having headaches, muscle aches, stomachaches, or unexplained pains
- Difficulty controlling feelings of worry
- Sleep problems, such as difficulty falling or staying asleep

## Causes of Anxiety Disorders

Anxiety disorders can be caused by a complex set of risk factors including:

### Genetics
Family history plays a role in increasing the likelihood that a person will develop an anxiety disorder. This suggests that genetics contributes to anxiety disorders.

### Brain Chemistry
Anxiety disorders appear to be related to the functions of certain areas and chemicals in the brain. Neurotransmitters like serotonin and dopamine play important roles in emotional regulation.

### Environmental Factors
Traumatic events, stress from a severe illness, or significant life changes can trigger anxiety disorders in people who are already susceptible to anxiety.

## Effective Treatments for Anxiety

The good news is that anxiety disorders are highly treatable. Here are some effective approaches:

### Cognitive-Behavioral Therapy (CBT)
CBT is one of the most effective treatments for anxiety disorders. It works by helping you identify and change thought patterns that lead to anxious feelings.

### Medication
Several types of medications have been found effective in treating anxiety disorders, including:
- Antidepressants
- Benzodiazepines (for short-term use)
- Buspirone
- Beta-blockers

### Lifestyle Changes
Simple lifestyle changes can help manage anxiety:
- Regular physical exercise
- Adequate sleep
- Healthy diet
- Mindfulness and meditation
- Reducing caffeine and alcohol consumption
- Stress management techniques

## When to Seek Professional Help

It's important to seek professional help if:
- Your anxiety is interfering with daily activities
- You're experiencing severe or frequent panic attacks
- You find yourself avoiding certain situations due to fear
- You're using substances to cope with anxiety
- You're having thoughts of self-harm or suicide

Remember, seeking help is a sign of strength, not weakness. With proper treatment, many people with anxiety disorders can lead normal, fulfilling lives.
    `,
    coverImage: "/anxiety-article.jpg",
    author: authors[0],
    category: categories[0],
    tags: [tags[2], tags[4], tags[5]],
    status: "published",
    createdAt: "2025-04-15T10:30:00Z",
    updatedAt: "2025-05-01T14:15:00Z",
    readTime: 8,
    featured: true
  },
  {
    id: "2",
    title: "The Science Behind Mindfulness Meditation",
    slug: "science-behind-mindfulness-meditation",
    excerpt: "Explore the neurological and psychological benefits of regular mindfulness practice based on recent research.",
    content: `
# The Science Behind Mindfulness Meditation

Mindfulness meditation has gained significant popularity in recent years, but what does science say about its effectiveness? This article explores the research behind mindfulness practices.

## What is Mindfulness?

Mindfulness is the practice of purposely focusing your attention on the present moment—and accepting it without judgment. It involves being fully engaged with whatever you're doing at the moment, free from distraction or judgment, and aware of your thoughts and feelings without getting caught up in them.

## The Neuroscience of Mindfulness

Research using MRI scans has shown that mindfulness meditation changes our brain in several positive ways:

### Reduced Activity in the Amygdala
The amygdala, known as our brain's "fight or flight" center, shows decreased activity after mindfulness training. This helps explain why regular practitioners experience less stress and anxiety.

### Strengthened Prefrontal Cortex
Regular meditation strengthens the prefrontal cortex—the brain region responsible for rational thinking, planning, and decision making. This helps improve focus and emotional regulation.

### Altered Default Mode Network
Mindfulness changes the brain's default mode network, which is active when our minds are wandering. This explains why meditation helps reduce rumination and negative self-talk.

## Psychological Benefits Backed by Research

### Reduced Anxiety and Depression
Multiple studies have found that mindfulness-based interventions can reduce symptoms of anxiety and depression, with effects comparable to those of antidepressant medications in some cases.

### Improved Attention and Focus
Research shows that regular mindfulness practice enhances attention span and ability to concentrate for extended periods.

### Better Emotional Regulation
Mindfulness helps people manage difficult emotions more effectively, leading to better responses to challenging situations.

## Physical Health Benefits

Beyond mental health, mindfulness has been associated with:
- Lower blood pressure
- Reduced chronic pain
- Improved sleep quality
- Enhanced immune function
- Decreased inflammatory responses

## How to Start a Mindfulness Practice

Starting a mindfulness practice doesn't require special equipment or extensive training:

1. **Begin with short sessions**: Start with just 5 minutes daily.
2. **Focus on your breath**: Notice the sensation of breathing without trying to change it.
3. **Notice when your mind wanders**: Gently redirect your attention back to your breath without self-criticism.
4. **Gradually extend your practice**: Work up to 15-20 minutes daily.
5. **Apply mindfulness to daily activities**: Practice being fully present while eating, walking, or conversing.

## Conclusion

The scientific evidence supporting mindfulness meditation continues to grow, offering compelling reasons to incorporate this ancient practice into our modern lives. Whether you're looking to reduce stress, improve focus, or enhance overall well-being, mindfulness provides evidence-based benefits worth exploring.
    `,
    coverImage: "/mindfulness-article.jpg",
    author: authors[1],
    category: categories[3],
    tags: [tags[0], tags[6], tags[7]],
    status: "published",
    createdAt: "2025-04-18T09:45:00Z",
    updatedAt: "2025-05-02T11:20:00Z",
    readTime: 6
  },
  {
    id: "3",
    title: "Supporting Children Through Grief and Loss",
    slug: "supporting-children-through-grief-loss",
    excerpt: "Practical guidance for parents and caregivers on helping children process grief in healthy, age-appropriate ways.",
    content: `
# Supporting Children Through Grief and Loss

When children experience loss, they need special support to process their grief in healthy ways. This article offers practical guidance for parents and caregivers.

## How Children Understand Death at Different Ages

### Preschool Age (2-4)
Children at this age typically don't understand that death is permanent. They may ask when the person will return or believe they can still play with a deceased pet.

### Early Elementary (5-7)
Children begin to understand death's permanence but may believe they somehow caused it through their thoughts or actions. Magical thinking is common at this age.

### Middle Childhood (8-11)
Children develop a more mature understanding of death as inevitable and irreversible, but may become preoccupied with details about what happens to the body.

### Adolescence (12+)
Teens understand death similarly to adults but may struggle intensely with existential questions and may hide their feelings to appear strong.

## Common Grief Reactions in Children

Children's grief often looks different from adult grief. Watch for:

- **Regression**: Return to earlier behaviors like bedwetting or thumb-sucking
- **Physical complaints**: Headaches, stomachaches, or other physical symptoms
- **Sleep disturbances**: Nightmares, fear of sleeping alone
- **Concentration issues**: Difficulty focusing at school
- **Play that involves themes of death or loss**: This is actually a healthy coping mechanism
- **Anger or acting out**: Especially common in older children and teens
- **Guilt or self-blame**: Particularly if they had negative thoughts about the person who died

## How to Talk to Children About Death

### Be honest and direct
Use clear, age-appropriate language. Avoid euphemisms like "passed away" or "gone to sleep," which can be confusing or frightening.

### Answer questions simply
Provide basic information first, then follow the child's lead with additional questions. It's okay to say "I don't know" when appropriate.

### Reassure them
Children often worry about who will take care of them or if others (or they themselves) will die too. Provide realistic reassurance about their safety.

### Share your own feelings
It's healthy for children to see adults grieve, as long as adults remain available to support the child's needs.

## Supporting Children Through the Grieving Process

### Maintain routines
Predictable schedules provide security during uncertain times.

### Create remembrance rituals
Memory boxes, special objects, or commemoration activities help children process grief.

### Allow expression through art and play
Young children particularly process emotions through creative activities and play.

### Read age-appropriate books about grief
Literature can help children understand their experiences and feel less alone.

### Involve children in memorials if they wish to participate
Allow them to choose their level of involvement, without pressure.

## When to Seek Professional Help

Consider professional support if your child:
- Shows prolonged depression or withdrawal
- Exhibits persistent sleep disturbances
- Expresses suicidal thoughts
- Shows prolonged inability to engage in daily activities
- Experiences severe regression that doesn't improve
- Has symptoms that worsen rather than gradually improve

## Conclusion

Children are remarkably resilient when given appropriate support. By providing honest information, maintaining routines, and offering opportunities for expression, adults can help children navigate grief in healthy ways. Remember that grief is not a linear process—it may resurface at different developmental stages as children gain new understanding.
    `,
    coverImage: "/child-grief-article.jpg",
    author: authors[2],
    category: categories[2],
    tags: [tags[8], tags[2]],
    status: "published",
    createdAt: "2025-04-22T15:10:00Z",
    updatedAt: "2025-05-03T09:30:00Z",
    readTime: 9
  },
  {
    id: "4",
    title: "The Connection Between Sleep and Mental Health",
    slug: "connection-between-sleep-mental-health",
    excerpt: "An in-depth look at how sleep affects psychological wellbeing and practical tips for improving sleep quality.",
    content: `
# The Connection Between Sleep and Mental Health

Sleep and mental health are intimately connected. The relationship is complex and bidirectional—mental health problems can affect how well you sleep, and poor sleep can affect your mental health.

## How Sleep Affects Mental Health

### Brain Function and Emotional Regulation
During sleep, the brain clears out waste products, processes emotional information, and consolidates memories. Without adequate sleep, these processes are disrupted, leading to:

- Difficulty regulating emotions
- Increased negativity bias
- Impaired cognitive function
- Reduced stress resilience

### Risk of Mental Health Disorders
Research consistently shows that sleep problems increase the risk of developing:

- Depression
- Anxiety disorders
- Bipolar disorder
- ADHD symptoms
- Substance abuse issues

One striking study found that insomnia sufferers are 5 times more likely to develop depression, and 20 times more likely to develop an anxiety disorder.

## How Mental Health Affects Sleep

Mental health conditions often bring sleep disruptions:

- **Depression**: Can cause both insomnia and hypersomnia (excessive sleep)
- **Anxiety**: Often leads to difficulty falling asleep due to racing thoughts
- **PTSD**: Can cause nightmare-filled, restless sleep
- **Bipolar disorder**: Associated with reduced need for sleep during manic phases
- **Schizophrenia**: Often disrupts sleep-wake cycles

## The Vicious Cycle

Poor sleep → Worsens mental health → Further disrupts sleep

Breaking this cycle often requires addressing both sleep and mental health simultaneously.

## Evidence-Based Sleep Improvement Strategies

### Cognitive Behavioral Therapy for Insomnia (CBT-I)
CBT-I is considered the gold standard for treating insomnia and includes:

- Sleep restriction therapy
- Stimulus control
- Cognitive restructuring
- Sleep hygiene education
- Relaxation techniques

### Sleep Hygiene Practices

#### Environment Optimization
- Keep your bedroom dark, quiet, and cool
- Use your bed only for sleep and intimacy
- Invest in a comfortable mattress and pillows

#### Behavioral Practices
- Maintain a consistent sleep schedule
- Create a relaxing pre-sleep routine
- Avoid screens 1-2 hours before bed
- Limit caffeine after noon
- Exercise regularly, but not close to bedtime
- Avoid large meals and alcohol before sleeping

### Mindfulness Practices for Better Sleep
- Body scan meditation
- Deep breathing exercises
- Progressive muscle relaxation
- Gratitude journaling before bed

## When to Seek Professional Help

Consider consulting a healthcare provider if:

- Sleep problems persist for more than three weeks
- Sleep issues are accompanied by significant distress
- You experience extreme daytime fatigue
- Your sleep is disrupted by physical symptoms
- You suspect a sleep disorder like sleep apnea or restless legs syndrome

## Conclusion

The relationship between sleep and mental health cannot be overstated. Taking steps to improve your sleep can have profound effects on your psychological wellbeing. Similarly, addressing mental health concerns often leads to better sleep quality. By understanding this important connection, you can take an integrated approach to improving both aspects of your health.
    `,
    coverImage: "/sleep-article.jpg",
    author: authors[3],
    category: categories[5],
    tags: [tags[2], tags[3], tags[7]],
    status: "published",
    createdAt: "2025-04-25T08:20:00Z",
    updatedAt: "2025-05-04T10:45:00Z",
    readTime: 7
  },
  {
    id: "5",
    title: "Effective Communication Techniques for Healthy Relationships",
    slug: "effective-communication-techniques-healthy-relationships",
    excerpt: "Learn research-backed strategies to improve communication with partners, family members, and friends.",
    content: `
# Effective Communication Techniques for Healthy Relationships

Communication is the foundation of all relationships. This article explores evidence-based techniques for improving how we connect with others.

## The Importance of Effective Communication

Research consistently shows that communication quality is one of the strongest predictors of relationship satisfaction. Good communication:

- Builds trust and emotional intimacy
- Prevents misunderstandings and conflict escalation
- Creates psychological safety
- Allows for healthy conflict resolution
- Strengthens bonds between people

## Common Communication Barriers

Before looking at solutions, it's important to recognize common obstacles:

### Internal Barriers
- Fear of vulnerability
- Defensiveness
- Emotional reactivity
- Need to be right
- Mind-reading and assumptions

### External Barriers
- Digital distractions
- Environmental noise
- Timing issues
- Cultural differences
- Language differences

## The Four Horsemen: Communication Patterns to Avoid

Research by Dr. John Gottman identified four communication patterns that predict relationship failure:

1. **Criticism**: Attacking someone's character rather than addressing a specific behavior
2. **Contempt**: Communicating from a position of superiority (the most destructive pattern)
3. **Defensiveness**: Refusing to accept responsibility and deflecting blame
4. **Stonewalling**: Withdrawing from interaction to avoid conflict

## Evidence-Based Communication Techniques

### Active Listening
- Give your full attention (put away devices)
- Use open body language
- Resist planning your response while the other person is speaking
- Validate feelings before offering solutions
- Check understanding by paraphrasing: "What I hear you saying is..."

### "I" Statements
Replace accusatory "you" statements with "I" statements that express your feelings:
- Instead of: "You never help around here."
- Try: "I feel overwhelmed when I handle all the household responsibilities alone."

### The XYZ Formula
"When you do X in situation Y, I feel Z."
- Specific behavior
- Specific context
- Your emotional response

### Nonviolent Communication (NVC)
Developed by Marshall Rosenberg, NVC follows four steps:
1. Observation (facts without judgment)
2. Feelings (emotion identification)
3. Needs (universal human needs)
4. Requests (clear, positive, actionable requests)

Example: "When I see dishes in the sink (observation), I feel frustrated (feeling) because I need order and shared responsibility (needs). Would you be willing to wash your dishes after using them? (request)"

### Emotional Intelligence in Communication
- Label emotions accurately
- Recognize emotional flooding (taking a 20-minute break when physiologically overwhelmed)
- Develop awareness of emotional triggers
- Practice self-regulation before responding

## Special Communication Challenges

### Conflict Resolution
- Approach conflict as a problem to solve together, not a battle to win
- Focus on one issue at a time
- Take turns speaking without interruption
- Look for compromise and win-win solutions
- Use repair attempts (humor, affection, or conciliation to defuse tension)

### Digital Communication
- Choose the right medium for important conversations (in-person is best)
- Be aware of tone limitations in written messages
- Wait before sending emotional messages
- Clarify misunderstandings promptly
- Set boundaries around technology use

## Practice Exercises for Better Communication

1. **Daily check-ins**: Spend 10 minutes each day sharing highs and lows
2. **Reflective listening practice**: Take turns speaking and reflecting back
3. **Appreciation exchanges**: Share three specific things you appreciate about each other
4. **Needs and feelings inventory**: Practice identifying and expressing emotions and needs

## Conclusion

Communication skills are not innate talents but learnable skills that improve with practice. By avoiding destructive patterns and implementing evidence-based techniques, anyone can improve their relationships through better communication. Remember that progress, not perfection, is the goal—and even communication experts make mistakes. The key is a willingness to learn, adjust, and try again.
    `,
    coverImage: "/communication-article.jpg",
    author: authors[1],
    category: categories[2],
    tags: [tags[2], tags[7]],
    status: "published",
    createdAt: "2025-04-28T14:35:00Z",
    updatedAt: "2025-05-01T16:50:00Z",
    readTime: 10
  }
];

export const psychologists: Psychologist[] = [
  {
    id: "1",
    name: "Dr. Emily Johnson",
    title: "Clinical Psychologist",
    bio: "Dr. Johnson specializes in treating anxiety disorders and depression using evidence-based approaches including CBT and mindfulness techniques. With over 15 years of experience, she creates personalized treatment plans tailored to each client's unique needs and circumstances.",
    avatar: "/psychologist1.jpg",
    specialties: ["Anxiety Disorders", "Depression", "Stress Management", "Trauma Recovery"],
    education: [
      "Ph.D. in Clinical Psychology, Stanford University",
      "M.A. in Psychology, University of California, Berkeley",
      "B.A. in Psychology, Columbia University"
    ],
    experience: [
      "Private Practice, 2010-Present",
      "Senior Psychologist, Bay Area Mental Health Center, 2005-2010",
      "Research Fellow, National Institute of Mental Health, 2003-2005"
    ],
    verified: true,
    availableSlots: [
      {
        id: "slot1",
        date: "2025-05-10",
        startTime: "09:00",
        endTime: "10:00",
        available: true
      },
      {
        id: "slot2",
        date: "2025-05-10",
        startTime: "11:00",
        endTime: "12:00",
        available: true
      },
      {
        id: "slot3",
        date: "2025-05-12",
        startTime: "14:00",
        endTime: "15:00",
        available: true
      },
      {
        id: "slot4",
        date: "2025-05-12",
        startTime: "16:00",
        endTime: "17:00",
        available: true
      }
    ],
    consultationTypes: [
      {
        id: "consult1",
        name: "Initial Consultation",
        description: "A first session to assess your needs and determine if we're a good fit for ongoing therapy.",
        duration: 60,
        price: 150,
        platform: "zoom"
      },
      {
        id: "consult2",
        name: "Individual Therapy",
        description: "One-on-one therapy session focused on addressing specific mental health concerns.",
        duration: 50,
        price: 130,
        platform: "zoom"
      },
      {
        id: "consult3",
        name: "Extended Session",
        description: "A longer therapy session for complex issues or intensive treatment.",
        duration: 90,
        price: 180,
        platform: "zoom"
      }
    ],
    rating: 4.9,
    reviewCount: 124
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    title: "Cognitive Behavioral Therapist",
    bio: "Dr. Chen is a cognitive behavioral therapist with particular expertise in relationship counseling and stress management. He helps clients identify negative thought patterns and develop healthier coping strategies for life's challenges.",
    avatar: "/psychologist2.jpg",
    specialties: ["Cognitive Behavioral Therapy", "Relationship Counseling", "Work-related Stress", "Personal Growth"],
    education: [
      "Psy.D. in Clinical Psychology, Yale University",
      "M.S. in Clinical Psychology, University of Michigan",
      "B.S. in Psychology, Duke University"
    ],
    experience: [
      "Private Practice, 2012-Present",
      "Staff Psychologist, Metropolitan Counseling Center, 2007-2012",
      "Adjunct Professor, City University Psychology Department, 2009-Present"
    ],
    verified: true,
    availableSlots: [
      {
        id: "slot5",
        date: "2025-05-11",
        startTime: "10:00",
        endTime: "11:00",
        available: true
      },
      {
        id: "slot6",
        date: "2025-05-11",
        startTime: "13:00",
        endTime: "14:00",
        available: true
      },
      {
        id: "slot7",
        date: "2025-05-13",
        startTime: "15:00",
        endTime: "16:00",
        available: true
      },
      {
        id: "slot8",
        date: "2025-05-14",
        startTime: "09:00",
        endTime: "10:00",
        available: true
      }
    ],
    consultationTypes: [
      {
        id: "consult4",
        name: "Initial Assessment",
        description: "A comprehensive first session to understand your concerns and develop a treatment plan.",
        duration: 75,
        price: 160,
        platform: "google-meet"
      },
      {
        id: "consult5",
        name: "Individual CBT Session",
        description: "Standard cognitive behavioral therapy session for various mental health concerns.",
        duration: 50,
        price: 140,
        platform: "google-meet"
      },
      {
        id: "consult6",
        name: "Couples Counseling",
        description: "Therapy session for couples working through relationship challenges.",
        duration: 80,
        price: 190,
        platform: "google-meet"
      }
    ],
    rating: 4.8,
    reviewCount: 98
  },
  {
    id: "3",
    name: "Sarah Parker, MA",
    title: "Child Psychologist",
    bio: "Sarah specializes in child psychology with a focus on developmental disorders and early intervention strategies. She creates a safe, nurturing environment for children to express themselves and develop important coping skills.",
    avatar: "/psychologist3.jpg",
    specialties: ["Child Psychology", "Developmental Disorders", "Parenting Support", "School-related Issues"],
    education: [
      "M.A. in Child Psychology, University of Chicago",
      "B.A. in Psychology, Northwestern University",
      "Certification in Play Therapy, Child Development Institute"
    ],
    experience: [
      "Child Therapist, Private Practice, 2015-Present",
      "School Psychologist, Oakwood Elementary School, 2013-2015",
      "Research Assistant, Child Development Lab, University of Chicago, 2011-2013"
    ],
    verified: true,
    availableSlots: [
      {
        id: "slot9",
        date: "2025-05-10",
        startTime: "13:00",
        endTime: "14:00",
        available: true
      },
      {
        id: "slot10",
        date: "2025-05-12",
        startTime: "10:00",
        endTime: "11:00",
        available: true
      },
      {
        id: "slot11",
        date: "2025-05-13",
        startTime: "16:00",
        endTime: "17:00",
        available: true
      },
      {
        id: "slot12",
        date: "2025-05-14",
        startTime: "14:00",
        endTime: "15:00",
        available: true
      }
    ],
    consultationTypes: [
      {
        id: "consult7",
        name: "Child Initial Assessment",
        description: "First session to meet with parent(s) and child to discuss concerns and goals.",
        duration: 60,
        price: 130,
        platform: "zoom"
      },
      {
        id: "consult8",
        name: "Child Therapy Session",
        description: "Individual therapy session for children using play therapy and other age-appropriate techniques.",
        duration: 45,
        price: 120,
        platform: "zoom"
      },
      {
        id: "consult9",
        name: "Parent Consultation",
        description: "Session focused on providing parents with guidance and strategies.",
        duration: 50,
        price: 125,
        platform: "zoom"
      }
    ],
    rating: 4.9,
    reviewCount: 87
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    title: "Neuropsychologist",
    bio: "Dr. Wilson is a neuropsychologist researching connections between brain function and mental health. He specializes in cognitive assessment and rehabilitation, helping clients understand and manage the cognitive aspects of various conditions.",
    avatar: "/psychologist4.jpg",
    specialties: ["Neuropsychological Assessment", "Cognitive Rehabilitation", "ADHD", "Memory Disorders"],
    education: [
      "Ph.D. in Neuropsychology, Harvard University",
      "M.S. in Cognitive Neuroscience, Massachusetts Institute of Technology",
      "B.S. in Neuroscience, Johns Hopkins University"
    ],
    experience: [
      "Director of Neuropsychology Services, Wilson Psychology Group, 2013-Present",
      "Research Scientist, Brain and Cognitive Sciences Lab, 2008-2013",
      "Clinical Neuropsychologist, University Medical Center, 2006-2008"
    ],
    verified: true,
    availableSlots: [
      {
        id: "slot13",
        date: "2025-05-11",
        startTime: "09:00",
        endTime: "10:00",
        available: true
      },
      {
        id: "slot14",
        date: "2025-05-12",
        startTime: "13:00",
        endTime: "14:00",
        available: true
      },
      {
        id: "slot15",
        date: "2025-05-13",
        startTime: "11:00",
        endTime: "12:00",
        available: true
      },
      {
        id: "slot16",
        date: "2025-05-14",
        startTime: "15:00",
        endTime: "16:00",
        available: true
      }
    ],
    consultationTypes: [
      {
        id: "consult10",
        name: "Neuropsychological Consultation",
        description: "Initial meeting to discuss cognitive concerns and determine assessment needs.",
        duration: 60,
        price: 170,
        platform: "skype"
      },
      {
        id: "consult11",
        name: "Cognitive Assessment Session",
        description: "Testing session to evaluate various cognitive domains.",
        duration: 120,
        price: 250,
        platform: "in-person"
      },
      {
        id: "consult12",
        name: "Feedback Session",
        description: "Review of assessment results and recommendations for treatment or accommodations.",
        duration: 60,
        price: 170,
        platform: "skype"
      }
    ],
    rating: 4.7,
    reviewCount: 62
  }
];
