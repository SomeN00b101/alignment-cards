 export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
]

 export const cards = [

  //#1
  {
    "category": "AP",
    "name": "Privacy",
    "definition": "Privacy is the right of individuals or groups to control access to their personal, sensitive, or proprietary information.",
    "human": "Humans must respect others’ boundaries, confidentiality, and consent when accessing or sharing information.",
    "organizational": "Organizations must implement systems and policies that safeguard customer and employee data.",
    "professional": "Experts are entrusted with sensitive data and must align their actions with ethical standards and consent-based information sharing",
    "machine": "AI systems must be designed to preserve user data privacy by default, processing only necessary data.",
    "failureModes": {
      "human": "Oversharing personal or others’ information without consent.",
      "organizational": "Inadequate data protection policies or enforcement.",
      "professional": "Failing to anonymize sensitive datasets during research",
      "machine": "Insecure APIs or data storage leading to breaches."
    }
  }

//#2
  {
    "category": "AP",
    "name": "Accountability",
    "definition": "Accountability is the principle that individuals or systems must be answerable for their actions and their consequences.",
    "human": "Humans are expected to own their decisions, correct mistakes, and face consequences if their actions harm others or deviate from agreed-upon norms.",
    "organizational": "Organizations must define clear roles, responsibilities, and oversight mechanisms, ensuring that decision-making processes are traceable and justifiable.",
    "professional": "Experts must document their reasoning, acknowledge uncertainty, and be prepared to justify outcomes—especially in high-stakes domains like medicine or law.",
    "machine": "AI systems must have mechanisms for traceability and auditability, so humans can understand who is responsible for outputs and intervene when errors occur.",
    "failureModes": {
      "human": "Taking actions without considering consequences or responsibility.",
      "organizational": "Lack of clear roles or responsibility in decision-making.",
      "professional": "Withholding uncertainty or omitting justifications in recommendations.",
      "machine": "No mechanisms to trace or attribute system outputs to specific inputs or actors."
    }
  }

  //#3
  {
    "category": "AP",
    "name": "Safety and Security",
    "definition": "Safety and security refer to the protection of people, systems, and environments from harm, misuse, or exploitation.",
    "human": "Humans should act in ways that reduce risk and avoid causing harm to themselves or others, especially when in positions of power or trust.",
    "organizational": "Organizations must ensure physical and digital safety, protecting assets, infrastructure, and people from threats—intentional or accidental.",
    "professional": "Experts must rigorously test and assess risks, avoid negligence, and develop solutions that minimize long-term or unintended consequences.",
    "machine": "AI systems must be robust, fail-safe, and resilient against adversarial attacks, system crashes, or emergent harmful behaviors.",
    "failureModes": {
      "human": "Risky behavior without assessing consequences.",
      "organizational": "Ignoring known security vulnerabilities.",
      "professional": "Failure to plan for edge cases or adversarial conditions.",
      "machine": "Susceptibility to hacking attacks or exploitation."
    }
  }

   //#4
  {
    "category": "AP",
    "name": "Transparency and Explainability",
    "definition": "Transparency and explainability refer to the ability to understand how and why decisions are made.",
    "human": "Humans align better when they communicate intentions clearly, explain reasoning, and are open to scrutiny or feedback.",
    "organizational": "Organizations must clearly communicate policies, decision criteria, and internal processes—especially those that impact stakeholders.",
    "professional": "Experts should articulate reasoning and evidence behind conclusions, enabling peer review, replication, and public understanding.",
    "machine": "AI systems should provide interpretable outputs, allow for meaningful user interrogation, and make their logic traceable—especially in high-stakes contexts.",
    "failureModes": {
      "human": "Concealing motives or omitting important information.",
      "organizational": "Failing to provide customers or regulators with meaningful insight into systems.",
      "professional": "Avoiding disclosure of uncertainty, bias, or limitations in research.",
      "machine": "Producing decisions with no explainable rationale."
    }
  }

   //#5
  {
    "category": "AP",
    "name": "Fairness and Non-Discrimination",
    "definition": "Fairness means treating people equitably and without bias; non-discrimination ensures no one is treated unjustly based on race, gender, age.",
    "human": "Humans must recognize and mitigate personal biases, act inclusively, and avoid unfair treatment in their interactions and decisions.",
    "organizational": "Organizations must audit their practices and systems for biases, ensuring inclusive policies, equitable opportunities, and compliance with civil rights laws.",
    "professional": "Experts must be aware of structural inequalities and embed fairness considerations in methods, models, and advice.",
    "machine": "AI systems must be trained on representative data and tested to ensure they do not perpetuate or amplify social inequalities or institutional bias.",
    "failureModes": {
      "human": "Implicit or explicit bias influencing decision-making.",
      "organizational": "Biased hiring, lending, or policing practices encoded into systems.",
      "professional": "Designing or validating models on non-representative datasets.",
      "machine": "Discriminatory outcomes due to biased training data."
    }
  }

   //#6
  {
    "category": "AP",
    "name": "Human Control of Technology",
    "definition": "Human control of technology means that humans remain in charge of critical decisions and system behavior, especially in complex or high-stakes domains.",
    "human": "Humans should not defer blindly to automation or authority, and must retain agency, judgment, and critical thinking when engaging with tools or decisions.",
    "organizational": "Organizations should ensure that employees can override automated decisions and maintain ultimate responsibility and control over AI-enabled processes.",
    "professional": "Experts should define meaningful human oversight protocols, especially in domains where AI recommendations influence life-altering decisions.",
    "machine": "AI systems should be designed for human-in-the-loop control, graceful shutdowns, and alignment with operator intentions and values.",
    "failureModes": {
      "human": "Inability to intervene when needed due to lack of training or authority.",
      "organizational": "Lack of override protocols or escalation paths in automated systems.",
      "professional": "Failure to define or enforce thresholds for human intervention during research or related exploratory work.",
      "machine": "Autonomous operation beyond human comprehension or control."
    }
  }
]
