// CCFA Practice Question Bank
// Source: Falcon_Platform_Architecture_Introduction_For_CCFA.docx
// Generated via source-to-quiz workflow: Phase 1-6
// Distractors engineered using trap taxonomy derived from CCFA-200b exam dump analysis
// (terminology-swap, cross-wiring, simple-vs-sophisticated, design-principle,
//  category-confusion, RBAC scope-precision, constraint-violation, architecture
//  best-practice, absolute-negative)

window.QUESTION_BANK = [
  {
    id: 1,
    type: "single",
    topic: "Platform Architecture Overview",
    difficulty: "easy",
    question: "What is a defining characteristic of the Falcon platform's architecture?",
    options: [
      "Multiple specialized agents, one per module, managed through separate consoles",
      "A single lightweight agent and single console covering all modules",
      "A cloud console paired with a separate on-premises management server",
      "An agentless architecture requiring no endpoint software"
    ],
    correctAnswer: "A single lightweight agent and single console covering all modules",
    explanation: "The training material states the Falcon platform was purpose-built in the cloud with a single console, single lightweight-agent architecture, delivering rapid deployment and reduced complexity.",
    sourceReference: "Introduction to Falcon"
  },
  {
    id: 2,
    type: "single",
    topic: "Platform Architecture Overview",
    difficulty: "medium",
    question: "In the Monday 10 AM example comparing a traditional fragmented security stack to Falcon's unified architecture, what is the primary advantage demonstrated?",
    options: [
      "It eliminates the need for a SOC analyst to review any alerts",
      "It correlates events across multiple layers automatically, dramatically reducing the time to connect the dots and take action",
      "It only monitors cloud login activity and ignores endpoint processes",
      "It requires manually cross-referencing each tool's dashboard before acting"
    ],
    correctAnswer: "It correlates events across multiple layers automatically, dramatically reducing the time to connect the dots and take action",
    explanation: "In the example, a traditional stack takes 30 minutes to connect an EDR alert, a cloud login anomaly, and an identity anomaly. With Falcon, NG SIEM correlates all three automatically, Charlotte AI identifies the pattern, and Fusion SOAR responds - reducing time to action to 3 minutes.",
    sourceReference: "Why This Architecture Matters"
  },
  {
    id: 3,
    type: "single",
    topic: "Platform Architecture Overview",
    difficulty: "medium",
    question: "According to the training material, what operational challenge is commonly caused by relying on many disconnected point-product security tools?",
    options: [
      "Security teams juggle as many as 45 different tools, and more tools tend to create more problems rather than fewer",
      "Point products automatically share a unified data layer by default",
      "Disconnected tools automatically synchronize telemetry through open standards",
      "Fragmented tooling reduces the average eCrime breakout time"
    ],
    correctAnswer: "Security teams juggle as many as 45 different tools, and more tools tend to create more problems rather than fewer",
    explanation: "The material states security teams juggle up to 45 different security tools, and the more tools they have, the more problems they face. It also cites an average eCrime breakout time of 48 minutes, which fragmentation does not reduce.",
    sourceReference: "Why This Architecture Matters"
  },
  {
    id: 4,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "easy",
    question: "Which Falcon module is primarily responsible for petabyte-scale data processing, AI-driven threat correlation, and centralized logging across the environment?",
    options: [
      "Falcon for Mobile",
      "Next-Gen SIEM",
      "Data Protection",
      "Counter Adversary Operations"
    ],
    correctAnswer: "Next-Gen SIEM",
    explanation: "Next-Gen SIEM integrates AI, machine learning, real-time analytics, and cloud-native architecture to provide petabyte-scale data processing, AI-driven threat correlation, and workflow automation.",
    sourceReference: "Next-Gen SIEM"
  },
  {
    id: 5,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "medium",
    question: "Morgan (Risk Manager) needs to create data classifications for PII, PCI, and PHI, and configure egress rules to prevent exfiltration while preserving legitimate workflows. Which module is she using?",
    options: [
      "Exposure Management",
      "Data Protection",
      "Counter Adversary Operations",
      "Cloud Security"
    ],
    correctAnswer: "Data Protection",
    explanation: "Although Morgan also uses Exposure Management (for asset discovery and vulnerability correlation), the specific tasks of data classification and egress rule configuration described here belong to Data Protection.",
    sourceReference: "Data Protection - How Morgan uses it"
  },
  {
    id: 6,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "medium",
    question: "What best describes the relationship between Falcon for IT (IT Automation) and Onum within the Falcon platform?",
    options: [
      "Onum replaces IT Automation entirely in the newest platform release",
      "IT Automation provides natural-language querying and automation for endpoints, servers, and cloud workloads, while Onum is a real-time data observability and orchestration platform that processes and routes data from the broader IT stack",
      "Onum is a Firewall Management add-on unrelated to IT Automation",
      "IT Automation and Onum both require a Foundry subscription to function"
    ],
    correctAnswer: "IT Automation provides natural-language querying and automation for endpoints, servers, and cloud workloads, while Onum is a real-time data observability and orchestration platform that processes and routes data from the broader IT stack",
    explanation: "IT Automation (Falcon for IT) unifies IT and security operations with natural-language queries and automation. Onum is described separately as a real-time, agnostic data observability and orchestration platform integrated within the Falcon ecosystem.",
    sourceReference: "IT Automation"
  },
  {
    id: 7,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "easy",
    question: "Which capability is explicitly listed as a feature of Next-Gen Identity Protection?",
    options: [
      "USB Device Control",
      "Risk-based MFA Enforcement",
      "Container Security",
      "Data Theft Prevention"
    ],
    correctAnswer: "Risk-based MFA Enforcement",
    explanation: "Risk-based MFA Enforcement is listed under Next-Gen Identity Protection features. USB Device Control belongs to Endpoint Security, Container Security to Cloud Security, and Data Theft Prevention to Data Protection.",
    sourceReference: "Next-Gen Identity Protection"
  },
  {
    id: 8,
    type: "multiple",
    topic: "Core Falcon Modules",
    difficulty: "hard",
    question: "Which of the following are listed as features of Falcon Cloud Security? (Select all that apply.)",
    options: [
      "Cloud Workload Protection (CWP)",
      "Cloud Security Posture Management (CSPM)",
      "Data Theft Prevention",
      "Cloud Infrastructure Entitlement Management (CIEM)",
      "Application Security Posture Management (ASPM)"
    ],
    correctAnswers: [
      "Cloud Workload Protection (CWP)",
      "Cloud Security Posture Management (CSPM)",
      "Cloud Infrastructure Entitlement Management (CIEM)",
      "Application Security Posture Management (ASPM)"
    ],
    explanation: "Cloud Security features listed are CWP, CSPM, CIEM, Container Security, ASPM, and DSPM. Data Theft Prevention is a Data Protection feature, not a Cloud Security feature.",
    sourceReference: "Cloud Security"
  },
  {
    id: 9,
    type: "single",
    topic: "User & Role Management",
    difficulty: "easy",
    question: "What happens to the setup link sent to a newly created Falcon user if it is not used in time?",
    options: [
      "It never expires",
      "It expires after 24 hours",
      "It expires after 7 days",
      "It automatically resends after 48 hours"
    ],
    correctAnswer: "It expires after 24 hours",
    explanation: "The training material notes: 'The link sent to the user to set up their username and password expires after 24 hours.'",
    sourceReference: "Create a user in Falcon"
  },
  {
    id: 10,
    type: "single",
    topic: "User & Role Management",
    difficulty: "medium",
    question: "Per the training material's best-practice guidance on administrator accounts, what should organizations avoid?",
    options: [
      "Assigning more than one administrator role to a single user",
      "Relying on a single administrator account",
      "Creating custom roles for specific job functions",
      "Assigning host groups during user creation"
    ],
    correctAnswer: "Relying on a single administrator account",
    explanation: "The material explicitly states: 'Never rely on a single administrator account.' The other options are not flagged as practices to avoid.",
    sourceReference: "Setting up and managing users"
  },
  {
    id: 11,
    type: "single",
    topic: "User & Role Management",
    difficulty: "medium",
    question: "When must user roles, host groups, cloud groups, and access scopes be assigned during the 'Create user' process in Falcon?",
    options: [
      "All of these must be assigned immediately during creation and can never be changed later",
      "Only roles are mandatory at creation; everything else can never be added",
      "All can be assigned at creation, but if unsure, they can be configured later, though assigning appropriate roles right away is recommended",
      "Only a Falcon Administrator role can be granted; other roles require a support ticket"
    ],
    correctAnswer: "All can be assigned at creation, but if unsure, they can be configured later, though assigning appropriate roles right away is recommended",
    explanation: "The material states these can all be assigned during creation, but if you're not sure what to assign at the moment, this can be done later - while still recommending setting up appropriate roles right away.",
    sourceReference: "Create a user in Falcon"
  },
  {
    id: 12,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "An organization deploys Falcon alongside its existing antivirus during a detect-only tuning phase, planning to remove the old antivirus once exclusions are validated. Which implementation strategy does this describe?",
    options: [
      "CrowdStrike Falcon only",
      "Short-term coexistence",
      "Long-term coexistence",
      "Sensor Compatibility Assessment"
    ],
    correctAnswer: "Short-term coexistence",
    explanation: "Short-term coexistence is defined as installing Falcon alongside a pre-existing antivirus during a detect-only tuning phase, removing the old antivirus after verifying Falcon is tuned with required exclusions.",
    sourceReference: "Establishing an implementation strategy"
  },
  {
    id: 13,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "hard",
    question: "Which statement best reflects the training material's guidance on long-term coexistence with another antivirus product?",
    options: [
      "It is the recommended strategy for most organizations due to defense-in-depth",
      "It is not recommended for most organizations, despite offering complementary security layers",
      "It is required by CrowdStrike for regulatory compliance",
      "It has no drawbacks compared to a Falcon-only deployment"
    ],
    correctAnswer: "It is not recommended for most organizations, despite offering complementary security layers",
    explanation: "The material lists 'complementary security layers, defense-in-depth' as a pro of long-term coexistence, but explicitly states: 'We do not recommend this option for most organizations.'",
    sourceReference: "Establishing an implementation strategy"
  },
  {
    id: 14,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "easy",
    question: "What must be disabled on firewalls, proxies, or antivirus systems for the Falcon sensor's certificate pinning (man-in-the-middle protection) to function correctly?",
    options: [
      "TLS 1.2",
      "Deep packet inspection (SSL/TLS interception)",
      "Windows Base Filtering Engine",
      "WinHTTP AutoProxy"
    ],
    correctAnswer: "Deep packet inspection (SSL/TLS interception)",
    explanation: "The sensor uses certificate pinning to defend against man-in-the-middle attacks. Deep packet inspection (also called HTTPS/TLS/SSL interception) can interfere with certificate validation and must be disabled or bypassed for the sensor's traffic.",
    sourceReference: "Network configuration"
  },
  {
    id: 15,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "Which Windows service may be disabled - potentially causing sensor installation issues - if the TCP/IP NetBIOS Helper service is disabled?",
    options: [
      "Windows Base Filtering Engine (BFE)",
      "LMHosts",
      "Network Store Interface (NSI)",
      "Windows Power Service"
    ],
    correctAnswer: "LMHosts",
    explanation: "The material notes: 'LMHosts might be disabled on your host if the TCP/IP NetBIOS Helper service is disabled.' All four services must be installed and running for sensor installation, but only LMHosts has this specific dependency noted.",
    sourceReference: "Falcon Sensor Pre-Installation Requirements"
  },
  {
    id: 16,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "hard",
    question: "On Windows Server systems, why must Windows Defender be manually disabled instead of being disabled automatically as it is on workstations?",
    options: [
      "Servers do not support PowerShell commands",
      "Servers lack a Windows Security Center (WSC) service",
      "Servers require a paid add-on to disable Defender",
      "Windows Defender is not installed on servers by default"
    ],
    correctAnswer: "Servers lack a Windows Security Center (WSC) service",
    explanation: "The training material states Windows Defender is disabled automatically on workstations when the CrowdStrike sensor is installed, but on servers it requires manual disablement because servers do not have the Windows Security Center (WSC) service.",
    sourceReference: "Falcon Sensor Pre-Installation Requirements"
  },
  {
    id: 17,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "What is the minimum TLS version required for the Falcon sensor to communicate with the CrowdStrike cloud?",
    options: ["SSL 3.0", "TLS 1.0", "TLS 1.1", "TLS 1.2"],
    correctAnswer: "TLS 1.2",
    explanation: "The material states: 'The Falcon sensor requires TLS 1.2 to communicate with the CrowdStrike cloud. Other protocols, including SSL or earlier versions of TLS, are not supported.'",
    sourceReference: "Network Protocols"
  },
  {
    id: 18,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "If a Falcon sensor cannot establish a connection to the CrowdStrike cloud during installation, what happens according to the training material?",
    options: [
      "The installer waits indefinitely until connectivity is restored",
      "The installer retries after 10 minutes, and the sensor uninstalls itself from the system if that retry also fails",
      "The sensor installs and permanently runs in Reduced Functionality Mode",
      "The installation immediately fails with no retry attempt"
    ],
    correctAnswer: "The installer retries after 10 minutes, and the sensor uninstalls itself from the system if that retry also fails",
    explanation: "The material states: 'If the sensor cannot establish a connection during the installation process, the installer will attempt to reconnect after 10 minutes. If it fails again, the Sensor will uninstall from the system.' This is a distinct behavior from Reduced Functionality Mode, which applies to already-installed sensors.",
    sourceReference: "Network Requirements"
  },
  {
    id: 19,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "Which condition will cause a Windows host to enter Reduced Functionality Mode (RFM), according to the training material?",
    options: [
      "Deploying a security update more than 48 hours after its release",
      "Deploying a security update within 48 hours of its release",
      "Disabling Windows Defender on the host",
      "Running a fully supported kernel version"
    ],
    correctAnswer: "Deploying a security update within 48 hours of its release",
    explanation: "The material states: 'If you deploy security updates within 48 hours of release, machines targeted for Falcon installation will enter reduced functionality mode. After 48 hours, CrowdStrike certifies compatibility through the cloud, preventing RFM on later updates.'",
    sourceReference: "Reduced Functionality Mode - Windows RFM"
  },
  {
    id: 20,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "hard",
    question: "A Linux host enters Reduced Functionality Mode shortly after a kernel update is applied. Based on the training material, what is the most likely explanation?",
    options: [
      "The kernel update was applied within the first ten days of its release, and Falcon has not yet certified compatibility",
      "Linux hosts are always placed in RFM immediately after any Falcon installation",
      "The host does not have Full Disk Access enabled",
      "The host's sensor update policy was deleted"
    ],
    correctAnswer: "The kernel update was applied within the first ten days of its release, and Falcon has not yet certified compatibility",
    explanation: "The material states: 'Applying kernel updates within the first ten days will trigger reduced functionality mode on affected systems.' Full Disk Access is the macOS RFM trigger, not Linux.",
    sourceReference: "Reduced Functionality Mode - Linux RFM"
  },
  {
    id: 21,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "Which condition specifically triggers Reduced Functionality Mode on a macOS host, according to the training material?",
    options: [
      "A kernel update applied within 10 days",
      "A security patch deployed within 48 hours",
      "Full Disk Access (FDA) not being enabled on the host",
      "The host being offline for more than 24 hours"
    ],
    correctAnswer: "Full Disk Access (FDA) not being enabled on the host",
    explanation: "The material states: 'A MacOS machine will enter RFM if Full Disk Access (FDA) is not enabled on the host.' The kernel-update and 48-hour-patch conditions apply to Linux and Windows respectively, not macOS.",
    sourceReference: "Reduced Functionality Mode - MacOS RFM"
  },
  {
    id: 22,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "easy",
    question: "According to the training material, what determines whether an endpoint is classified as 'managed' versus 'unmanaged' in Falcon?",
    options: [
      "Whether the device is physical or virtual",
      "Whether the device has a Falcon sensor installed",
      "Whether the device is used by an employee or a contractor",
      "Whether the device is on-premises or in the cloud"
    ],
    correctAnswer: "Whether the device has a Falcon sensor installed",
    explanation: "The material states: 'In Falcon, any system with a sensor installed is considered a managed endpoint, while systems without a sensor are unmanaged endpoints, regardless of where they run.'",
    sourceReference: "What is an endpoint?"
  },
  {
    id: 23,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "Which endpoint threat technique is described as deliberately avoiding dropping files on disk by abusing native tools such as PowerShell to execute code directly in memory?",
    options: [
      "Ransomware",
      "Phishing and Credential Theft",
      "Living off the Land (LOLBins)",
      "Insider Threats"
    ],
    correctAnswer: "Living off the Land (LOLBins)",
    explanation: "LOLBins are described as a quieter, stealthier tactic where attackers abuse native tools like PowerShell to execute malicious code in memory, leaving little to no forensic artifacts on disk.",
    sourceReference: "Endpoint Threats - Living off the Land"
  },
  {
    id: 24,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "What makes insider threats, particularly from disgruntled employees, especially difficult to detect compared to external attacks, per the training material?",
    options: [
      "Insiders lack any access to systems and must first breach the network",
      "Insiders already have legitimate access to systems and sensitive information",
      "Insiders always use malware files that are easy to detect",
      "Insiders exclusively target cloud endpoints"
    ],
    correctAnswer: "Insiders already have legitimate access to systems and sensitive information",
    explanation: "The material states: 'Unlike external attackers, insiders already have legitimate access to systems and sensitive information,' making detection especially challenging.",
    sourceReference: "Endpoint Threats - Insider Threats"
  },
  {
    id: 25,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "easy",
    question: "In the telemetry flow described in the training material, what is the correct order of data movement?",
    options: [
      "Falcon Console -> Falcon Cloud -> Falcon Sensor -> Endpoint",
      "Endpoint -> Falcon Sensor -> Falcon Cloud -> Falcon Console",
      "Endpoint -> Falcon Cloud -> Falcon Sensor -> Falcon Console",
      "Falcon Sensor -> Endpoint -> Falcon Console -> Falcon Cloud"
    ],
    correctAnswer: "Endpoint -> Falcon Sensor -> Falcon Cloud -> Falcon Console",
    explanation: "Telemetry flows from the endpoint, through the Falcon sensor, into the Falcon cloud where AI/ML analyze it, and results surface in the Falcon console as detections and incidents.",
    sourceReference: "How CrowdStrike Falcon sees Everything"
  },
  {
    id: 26,
    type: "multiple",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "Which of the following are listed as components of the CrowdStrike Falcon Endpoint Security module? (Select all that apply.)",
    options: [
      "Endpoint Detection and Response (EDR)",
      "Host Based Firewall Management",
      "Cloud Security Posture Management (CSPM)",
      "USB/Bluetooth/PCIe Device Control",
      "Process and File Forensics"
    ],
    correctAnswers: [
      "Endpoint Detection and Response (EDR)",
      "Host Based Firewall Management",
      "USB/Bluetooth/PCIe Device Control",
      "Process and File Forensics"
    ],
    explanation: "The Endpoint Security module includes EPP, EDR, Host Based Firewall Management, USB/Bluetooth/PCIe Device Control, and Process and File Forensics. CSPM belongs to Cloud Security, not Endpoint Security.",
    sourceReference: "Endpoint Security in Falcon"
  },
  {
    id: 27,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "hard",
    question: "Why does the training material state that 'not all endpoint telemetry is created equal'?",
    options: [
      "Because some endpoints only generate telemetry once every 24 hours",
      "Because poor-quality data leads to poor-quality outcomes, so the depth and fidelity of telemetry directly affects detection accuracy",
      "Because only Windows endpoints generate usable telemetry",
      "Because telemetry quality depends solely on network bandwidth"
    ],
    correctAnswer: "Because poor-quality data leads to poor-quality outcomes, so the depth and fidelity of telemetry directly affects detection accuracy",
    explanation: "The material explains that deep endpoint visibility generates high-fidelity detections and reduces noise and false positives, while poor-quality data leads to poor-quality outcomes.",
    sourceReference: "What endpoint visibility enables"
  },
  {
    id: 28,
    type: "single",
    topic: "Dashboards",
    difficulty: "easy",
    question: "Which type of Falcon dashboard must be duplicated before it can be edited or shared?",
    options: ["Private Dashboard", "Shared Dashboard", "Preset Dashboard", "Legacy Dashboard"],
    correctAnswer: "Preset Dashboard",
    explanation: "The material notes: 'Preset dashboards must be duplicated before you can edit or share them.'",
    sourceReference: "Accessing Dashboards"
  },
  {
    id: 29,
    type: "single",
    topic: "Dashboards",
    difficulty: "medium",
    question: "Which dashboard is available specifically to Next-Gen SIEM users and accessed via Next-Gen SIEM > Log management > Dashboards?",
    options: ["Foundry Dashboard", "SOC Efficacy Dashboard", "Legacy Dashboard", "Preset Dashboard"],
    correctAnswer: "SOC Efficacy Dashboard",
    explanation: "The material states the SOC Efficacy Dashboard is available for Next-Gen SIEM users and is accessed via Next-Gen SIEM > Log management > Dashboards. The Foundry Dashboard instead requires a Foundry subscription.",
    sourceReference: "Accessing Dashboards"
  },
  {
    id: 30,
    type: "single",
    topic: "Firewall Management",
    difficulty: "medium",
    question: "Which underlying enforcement technology does Falcon Firewall Management use on Linux endpoints?",
    options: [
      "Windows Filtering Platform (WFP)",
      "Network Extensions Framework",
      "Extended Berkeley Packet Filter (eBPF)",
      "iptables"
    ],
    correctAnswer: "Extended Berkeley Packet Filter (eBPF)",
    explanation: "Per the Platform Technologies table: Windows uses WFP, macOS uses Network Extensions Framework, and Linux uses eBPF. iptables is a native Linux tool that Falcon does not rely on.",
    sourceReference: "Cross-Platform Firewall Management"
  },
  {
    id: 31,
    type: "single",
    topic: "Firewall Management",
    difficulty: "hard",
    question: "According to the training material, how does Falcon Firewall Management relate to native OS firewall tools such as Windows Firewall, pf, iptables, and firewalld?",
    options: [
      "Falcon manages and configures these native tools directly through the console",
      "Falcon does not rely on these native tools; it uses its own CrowdStrike-managed enforcement technologies on each platform",
      "Falcon requires these native tools to be enabled before its own firewall can function",
      "Falcon replaces these tools only on Linux, but still relies on them on Windows and macOS"
    ],
    correctAnswer: "Falcon does not rely on these native tools; it uses its own CrowdStrike-managed enforcement technologies on each platform",
    explanation: "The material explicitly states: 'Falcon does not rely on traditional operating system firewall management tools such as Windows Firewall, pf, iptables, firewalld. Instead, Falcon integrates with operating system networking frameworks to inspect and enforce traffic.'",
    sourceReference: "How Enforcement Works"
  },
  {
    id: 32,
    type: "single",
    topic: "Firewall Management",
    difficulty: "easy",
    question: "Which operating systems are supported by Falcon Firewall Management?",
    options: [
      "Windows only",
      "Windows and macOS only",
      "Windows, macOS, and Linux",
      "Windows, macOS, Linux, and mobile (Android/iOS)"
    ],
    correctAnswer: "Windows, macOS, and Linux",
    explanation: "Supported platforms for Falcon Firewall Management are Windows, macOS, and Linux. Mobile devices are covered separately by Falcon for Mobile, not Firewall Management.",
    sourceReference: "Supported Platforms"
  },
  {
    id: 33,
    type: "single",
    topic: "Firewall Management",
    difficulty: "medium",
    question: "What is the primary benefit organizations gain from Falcon's centralized firewall management model, as described in the training material?",
    options: [
      "Administrators must learn a separate firewall tool for each operating system",
      "A single console experience for creating policies, managing rule groups, and investigating firewall activity across mixed OS environments",
      "Firewall enforcement is handled entirely by third-party vendors",
      "Firewall policies automatically sync with corporate email systems"
    ],
    correctAnswer: "A single console experience for creating policies, managing rule groups, and investigating firewall activity across mixed OS environments",
    explanation: "The material states administrators do not need to manage separate firewall tools for each operating system - Falcon provides a unified management experience across Windows, macOS, and Linux.",
    sourceReference: "Why This Matters"
  },
  {
    id: 34,
    type: "single",
    topic: "Firewall Management",
    difficulty: "hard",
    question: "Which of the following correctly maps a platform to its Falcon firewall enforcement technology?",
    options: [
      "Windows -> eBPF",
      "macOS -> Network Extensions Framework",
      "Linux -> Windows Filtering Platform",
      "macOS -> Extended Berkeley Packet Filter"
    ],
    correctAnswer: "macOS -> Network Extensions Framework",
    explanation: "Correct mapping: Windows -> Windows Filtering Platform (WFP), macOS -> Network Extensions Framework, Linux -> Extended Berkeley Packet Filter (eBPF).",
    sourceReference: "Cross-Platform Firewall Management"
  },
  {
    id: 35,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "easy",
    question: "What are the three components of the model used to build Falcon Fusion SOAR workflows?",
    options: [
      "If, Then, Else",
      "Trigger, Condition, Action",
      "Input, Process, Output",
      "Alert, Investigate, Remediate"
    ],
    correctAnswer: "Trigger, Condition, Action",
    explanation: "The material states: 'Workflows are built around a trigger-condition-action model.'",
    sourceReference: "Introduction to Falcon Fusion SOAR"
  },
  {
    id: 36,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "In the Falcon platform's visual workflow builder, which color and icon represents a Trigger?",
    options: [
      "Purple with two diverging arrows",
      "Green with a flag",
      "Pink with a lightning bolt",
      "Blue with circular arrows"
    ],
    correctAnswer: "Pink with a lightning bolt",
    explanation: "The Trigger icon is pink with a lightning bolt. Condition is purple with two diverging arrows, Action is green with a flag, and Loop is blue with circular arrows.",
    sourceReference: "Basic workflow elements: Triggers"
  },
  {
    id: 37,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which Fusion SOAR trigger type would best fit a requirement to send a report every morning at 6 AM summarizing overnight vulnerability findings?",
    options: ["Event trigger", "Schedule trigger", "On demand trigger", "Alert trigger"],
    correctAnswer: "Schedule trigger",
    explanation: "The Schedule trigger option triggers a workflow based on a user-defined interval (hourly, daily, weekly, monthly) - ideal for recurring tasks like the Daily Vulnerability Reports example.",
    sourceReference: "Schedule trigger options"
  },
  {
    id: 38,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which Fusion SOAR trigger type is most appropriate for a workflow that revokes a user's Okta session with the click of a button?",
    options: [
      "Event trigger, because it responds to system-generated events",
      "Schedule trigger, because it can be configured to run frequently",
      "On demand trigger, because it is manually initiated by a user, another workflow, or an API call",
      "Loop trigger, because it can repeat the action for multiple users"
    ],
    correctAnswer: "On demand trigger, because it is manually initiated by a user, another workflow, or an API call",
    explanation: "The training material's Scenario 3 explicitly concludes: 'Event triggers do not work with the click of a button.' On demand is the correct choice for manual, button-initiated actions.",
    sourceReference: "Knowledge check: Which trigger type might you use?"
  },
  {
    id: 39,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "hard",
    question: "A Fusion SOAR workflow uses an AND operator with two conditions: severity >= high AND host group = specified group. In which scenario does the action execute?",
    options: [
      "Severity is high, but the host is not in the specified host group",
      "Severity is low, but the host is in the specified host group",
      "Severity is high or above, and the host is in the specified host group",
      "Either condition alone is sufficient to trigger the action"
    ],
    correctAnswer: "Severity is high or above, and the host is in the specified host group",
    explanation: "With AND operators, the overall condition evaluates to true only if all included conditions are true. The material explicitly notes that high-severity detections outside the specified host groups would not send an email.",
    sourceReference: "Basic workflow elements: Conditions"
  },
  {
    id: 40,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "What distinguishes sequential actions from parallel actions in a Fusion SOAR workflow?",
    options: [
      "Sequential actions run independently of each other; parallel actions depend on the previous action completing",
      "Sequential actions depend on the successful execution of the previous action; parallel actions run independently at the same time",
      "Both sequential and parallel actions always execute at the same time",
      "Parallel actions can only be used inside loops"
    ],
    correctAnswer: "Sequential actions depend on the successful execution of the previous action; parallel actions run independently at the same time",
    explanation: "The material states parallel actions are executed in parallel and independent of each other, whereas sequential actions are executed one after the other and are always dependent on the successful execution of the previous action.",
    sourceReference: "Customizing workflow branches"
  },
  {
    id: 41,
    type: "multiple",
    topic: "Falcon Fusion SOAR",
    difficulty: "hard",
    question: "In the example workflow illustrating CrowdStrike Store integrations, which of the following are named as the CrowdStrike Store Apps used? (Select all that apply.)",
    options: ["VirusTotal", "Slack", "Falcon Foundry", "Falcon Firewall Management"],
    correctAnswers: ["VirusTotal", "Slack"],
    explanation: "The material names VirusTotal and Slack as the two CrowdStrike Store Apps used in the example workflow. Falcon Foundry is a separate low-code application platform, and Firewall Management is unrelated to this example.",
    sourceReference: "Apps (formerly known as Integrations)"
  },
  {
    id: 42,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which Fusion SOAR role has 'View data in Falcon Fusion SOAR' access but explicitly cannot create or edit workflows, per the roles table in the training material?",
    options: [
      "Workflow Author",
      "Falcon Analyst - Read Only",
      "XDR Administrator",
      "Falcon Security Lead"
    ],
    correctAnswer: "Falcon Analyst - Read Only",
    explanation: "In the Falcon Fusion SOAR roles table, Falcon Analyst - Read Only has an X only under 'View data' (and Limited NG-SIEM access), with no X under 'Create and edit workflows.' The other three roles listed all have workflow creation/edit access.",
    sourceReference: "Falcon Fusion SOAR roles"
  },
  {
    id: 43,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "easy",
    question: "Which of the following is explicitly stated as data that Falcon for Mobile does NOT collect, consistent with its 'privacy by design' approach?",
    options: [
      "Network activity",
      "App installations",
      "Text messages and chat conversations",
      "Device posture information"
    ],
    correctAnswer: "Text messages and chat conversations",
    explanation: "Falcon for Mobile is designed to focus on security-relevant telemetry and does not collect personal content such as emails, text messages, chat conversations, or social media content.",
    sourceReference: "Privacy by Design"
  },
  {
    id: 44,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "medium",
    question: "An organization manages all corporate phones through Microsoft Intune. Based on the training material, which deployment method would provide the most streamlined enrollment experience for Falcon for Mobile?",
    options: [
      "BYOD with manual enrollment invitations",
      "MDM with zero-touch enrollment",
      "A hybrid of MDM and BYOD for every device",
      "No deployment model is needed since Intune already provides security"
    ],
    correctAnswer: "MDM with zero-touch enrollment",
    explanation: "The scenario in the training material concludes that for corporate-managed devices under an MDM like Intune, 'MDM with zero-touch enrollment' provides the most streamlined enrollment experience.",
    sourceReference: "Supported Deployment Models"
  },
  {
    id: 45,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "A vulnerability was previously remediated but has now been identified again on the same host. What status would Vulnerability Management assign to it?",
    options: ["Closed", "Suppressed", "Reopened", "Expired"],
    correctAnswer: "Reopened",
    explanation: "The status 'Reopened' is defined as: 'Vulnerability that was previously remediated is identified again.'",
    sourceReference: "Vulnerability Management Terminology - Status"
  },
  {
    id: 46,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "hard",
    question: "A host has been inactive for 45 days. According to the training material, what status will its associated vulnerabilities most likely be assigned, and what does that status mean?",
    options: [
      "Suppressed - the vulnerability was manually hidden by an analyst",
      "Expired - the vulnerability is scheduled to be removed within 3 days",
      "Reopened - the vulnerability was previously fixed and has reappeared",
      "Closed - the vulnerability has been fully remediated"
    ],
    correctAnswer: "Expired - the vulnerability is scheduled to be removed within 3 days",
    explanation: "The material states the Expired status is assigned to vulnerabilities on a deleted host or a host that has been inactive for 45 days, and means the vulnerability is scheduled to be removed within 3 days.",
    sourceReference: "Vulnerability Management Terminology - Status"
  },
  {
    id: 47,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "Which exploit severity status indicates that a vulnerability has an exploit that has actually been used in at least one real attack?",
    options: ["Unproven", "Available (medium)", "Easily accessible (high)", "Actively used (critical)"],
    correctAnswer: "Actively used (critical)",
    explanation: "The four exploit severity statuses, in ascending order, are Unproven (no known exploits), Available/medium (at least one known exploit), Easily accessible/high (packaged exploit readily available), and Actively used/critical (exploit used in at least one attack).",
    sourceReference: "Vulnerability Management Terminology - Exploit"
  },
  {
    id: 48,
    type: "single",
    topic: "Asset Management",
    difficulty: "easy",
    question: "Which term describes an asset that is capable of having a Falcon sensor installed, but currently does not have one?",
    options: ["Managed Asset", "Unmanaged Asset", "Unsupported Asset", "Unknown Asset"],
    correctAnswer: "Unmanaged Asset",
    explanation: "An Unmanaged Asset is defined as 'an asset that can have the Falcon sensor installed but does not.' An Unsupported Asset, by contrast, is one that cannot have a sensor installed at all.",
    sourceReference: "Asset Management Terminology"
  },
  {
    id: 49,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "A printer connected to the corporate network cannot have a Falcon sensor installed on it. How would Asset Management classify this device?",
    options: ["Managed Asset", "Unmanaged Asset", "Unsupported Asset", "Virtual Asset"],
    correctAnswer: "Unsupported Asset",
    explanation: "The material defines an Unsupported Asset as 'an asset that cannot have a Falcon sensor installed, such as a printer' - using this exact example.",
    sourceReference: "Asset Management Terminology"
  },
  {
    id: 50,
    type: "single",
    topic: "Asset Management",
    difficulty: "hard",
    question: "Which Asset Management role is limited to only 'View' permissions for data, reports, and configurations, without the ability to configure rules and application groups, based on the roles table in the training material?",
    options: [
      "Falcon Administrator",
      "Exposure Asset Admin",
      "Exposure Management Manager",
      "Falcon Analyst - Read Only"
    ],
    correctAnswer: "Falcon Analyst - Read Only",
    explanation: "In the Asset Management Roles table, Falcon Administrator, Exposure Asset Admin, and Exposure Management Manager all have both View and Configure permissions. Falcon Analyst - Read Only (along with Exposure Asset Analyst, Falcon Security Lead, Falcon Investigator, and Event Viewer) has View-only access.",
    sourceReference: "Asset Management Roles"
  },
  {
    id: 51,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "easy",
    question: "Which AI capability focuses on identifying anomalies in how software behaves on endpoints, such as malware execution or unauthorized access attempts?",
    options: ["Threat Hunting", "Behavioral Analysis", "Real-Time Analytics", "Cloud Scalability"],
    correctAnswer: "Behavioral Analysis",
    explanation: "Behavioral Analysis analyzes behavioral patterns of processes and users on endpoints, identifying anomalies that may indicate malicious activities such as malware execution or unauthorized access attempts.",
    sourceReference: "CrowdStrike and AI"
  },
  {
    id: 52,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "medium",
    question: "Which AI capability maps adversary tactics, techniques, and procedures (TTPs) to a well-known industry framework?",
    options: ["Adversary Detection", "Threat Context and Correlation", "Malware Detection and Prevention", "Automated Incident Response"],
    correctAnswer: "Threat Context and Correlation",
    explanation: "Threat Context and Correlation helps correlate threat data across devices and environments, including mapping threats to the MITRE ATT&CK framework.",
    sourceReference: "CrowdStrike and AI"
  },
  {
    id: 53,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "medium",
    question: "What is Charlotte AI, as described in the training material?",
    options: [
      "A dedicated threat-hunting team within CrowdStrike",
      "CrowdStrike's generative AI assistant that lets users ask plain-language questions and automate tasks like investigations and script generation",
      "A separate hardware appliance for on-premises AI processing",
      "A vulnerability scanning engine"
    ],
    correctAnswer: "CrowdStrike's generative AI assistant that lets users ask plain-language questions and automate tasks like investigations and script generation",
    explanation: "Charlotte AI is CrowdStrike's built-in generative AI assistant that lets users ask plain-language questions and automate tasks like investigations, script generation, and threat analysis.",
    sourceReference: "CrowdStrike and AI - Generative AI"
  },
  {
    id: 54,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "medium",
    question: "What is the primary function of AI Detection and Response (AIDR)?",
    options: [
      "Detecting malware on endpoint file systems",
      "Monitoring, detecting, and responding to generative AI tool usage across enterprise environments, such as ChatGPT or Bard",
      "Managing firewall rule groups across operating systems",
      "Prioritizing vulnerabilities based on exploit status"
    ],
    correctAnswer: "Monitoring, detecting, and responding to generative AI tool usage across enterprise environments, such as ChatGPT or Bard",
    explanation: "AIDR is designed to monitor, detect, and respond to generative AI tool usage across enterprise environments, providing visibility into how tools like ChatGPT and Bard are being used.",
    sourceReference: "AI Detection and Response (AIDR)"
  },
  {
    id: 55,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "hard",
    question: "What distinguishes 'AIDR for Workforce' from 'AIDR for Agents'?",
    options: [
      "AIDR for Workforce integrates with endpoint agents to enforce policies at the device level, while AIDR for Agents monitors AI usage in managed web browsers",
      "AIDR for Workforce monitors AI usage in managed web browsers, while AIDR for Agents integrates with endpoint agents to enforce policies at the device level",
      "Both deployment models are identical and only differ in licensing cost",
      "AIDR for Agents is exclusively for mobile devices"
    ],
    correctAnswer: "AIDR for Workforce monitors AI usage in managed web browsers, while AIDR for Agents integrates with endpoint agents to enforce policies at the device level",
    explanation: "AIDR supports two deployment models: AIDR for Workforce monitors AI usage in managed web browsers, and AIDR for Agents integrates with endpoint agents to enforce policies at the device level.",
    sourceReference: "AI Detection and Response (AIDR)"
  },
  {
    id: 56,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "medium",
    question: "In the Charlotte AI agentic response triage feature, what can an analyst do with the 'blue arrow' during an investigation?",
    options: [
      "Delete irrelevant detections permanently",
      "Manually prioritize which critical questions Charlotte should answer first",
      "Escalate the case directly to CrowdStrike support",
      "Switch between light and dark mode"
    ],
    correctAnswer: "Manually prioritize which critical questions Charlotte should answer first",
    explanation: "Charlotte provides critical questions to answer at the forefront of the investigation, and these questions can be manually prioritized via the blue arrow so Charlotte answers them first.",
    sourceReference: "Charlotte AI - How Jane uses it"
  },
  {
    id: 57,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "easy",
    question: "Which AI capability is described as processing billions of events daily from devices around the world to identify new threats?",
    options: ["Threat Intelligence", "Cloud Scalability", "Real-Time Analytics", "Generative AI"],
    correctAnswer: "Threat Intelligence",
    explanation: "The Falcon platform integrates AI with its threat intelligence data, processing billions of events daily from devices around the world to identify new threats and generate defensive insights.",
    sourceReference: "CrowdStrike and AI"
  },
  {
    id: 58,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "medium",
    question: "Which AI capability is specifically about deploying in the cloud to process data from millions of endpoints globally and continuously improve algorithms?",
    options: ["Cloud Scalability", "Real-Time Analytics", "Adversary Detection", "Automated Incident Response"],
    correctAnswer: "Cloud Scalability",
    explanation: "Cloud Scalability describes CrowdStrike's AI being deployed in the cloud, processing data from millions of endpoints globally and using aggregated insights to continuously improve its algorithms.",
    sourceReference: "CrowdStrike and AI"
  },
  {
    id: 59,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "medium",
    question: "Which AI capability is responsible for containing compromised systems, removing malware, and remediating issues with minimal human intervention once a threat is detected?",
    options: ["Behavioral Analysis", "Automated Incident Response", "Threat Hunting", "Malware Detection and Prevention"],
    correctAnswer: "Automated Incident Response",
    explanation: "AI plays a crucial role in automating incident response workflows: once a threat is detected, CrowdStrike's platform uses AI to contain compromised systems, remove malware, and remediate issues with minimal human intervention.",
    sourceReference: "CrowdStrike and AI"
  },
  {
    id: 60,
    type: "single",
    topic: "CrowdStrike and AI",
    difficulty: "hard",
    question: "Which AI capability uses machine learning models to analyze files, memory usage, and behaviors, enabling detection of both known and unknown malware without relying on traditional signature-based methods?",
    options: ["Malware Detection and Prevention", "Behavioral Analysis", "Threat Intelligence", "Adversary Detection"],
    correctAnswer: "Malware Detection and Prevention",
    explanation: "CrowdStrike uses AI-driven machine learning models under Malware Detection and Prevention to analyze files, memory usage, and behaviors, identifying and blocking known and unknown malware without relying on traditional signature-based methods.",
    sourceReference: "CrowdStrike and AI"
  },
  {
    id: 61,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "easy",
    question: "Which of the following is NOT listed as a supported cloud environment for Falcon Cloud Security?",
    options: ["Amazon Web Services (AWS)", "Microsoft Azure", "IBM Cloud", "Oracle Cloud Infrastructure (OCI)"],
    correctAnswer: "IBM Cloud",
    explanation: "Supported cloud environments listed are AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud Infrastructure, Kubernetes clusters, and hybrid/multi-cloud architectures. IBM Cloud is not listed.",
    sourceReference: "Supported Cloud Environments"
  },
  {
    id: 62,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "Where in the Falcon console can an administrator monitor sensors that are in Reduced Functionality Mode?",
    options: [
      "Dashboards and reports > All dashboards",
      "Host setup and management > Manage endpoints > Sensor health",
      "Support and resources > Documentation",
      "Next-Gen SIEM > Log management"
    ],
    correctAnswer: "Host setup and management > Manage endpoints > Sensor health",
    explanation: "To access the Sensor health dashboard, navigate to Host setup and management, then under Manage endpoints click Sensor health.",
    sourceReference: "Sensor Health Dashboard"
  },
  {
    id: 63,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "easy",
    question: "Which of the following is explicitly listed as a supported Falcon Cloud Security environment?",
    options: ["Kubernetes clusters", "VMware vSphere only", "On-premises bare metal only", "Legacy mainframe systems"],
    correctAnswer: "Kubernetes clusters",
    explanation: "Kubernetes clusters are explicitly listed among the supported cloud environments, alongside AWS, Azure, GCP, OCI, and hybrid/multi-cloud architectures.",
    sourceReference: "Supported Cloud Environments"
  },
  {
    id: 64,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "An organization runs workloads across AWS and Azure simultaneously, with some data centers still on-premises. Which category of environment does this describe, per the training material's supported list?",
    options: ["Single-cloud only", "Hybrid/multi-cloud architecture", "Unsupported environment", "Kubernetes-exclusive"],
    correctAnswer: "Hybrid/multi-cloud architecture",
    explanation: "Hybrid/multi-cloud architectures are explicitly listed as a supported environment for Falcon Cloud Security.",
    sourceReference: "Supported Cloud Environments"
  },
  {
    id: 70,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "Which of the following is explicitly recommended as part of a successful Falcon implementation planning checklist?",
    options: [
      "Establishing exactly one Falcon administrator to simplify accountability",
      "Establishing at least two Falcon administrators",
      "Disabling all firewalls permanently during rollout",
      "Skipping network requirement configuration until after go-live"
    ],
    correctAnswer: "Establishing at least two Falcon administrators",
    explanation: "The planning checklist explicitly recommends establishing at least two Falcon administrators, consistent with the guidance to never rely on a single administrator account.",
    sourceReference: "Planning checklist and resources"
  },
  {
    id: 71,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "What should an organization be aware of before installing the Falcon sensor within a Virtual Desktop Infrastructure (VDI) or Virtual Machine (VM) environment?",
    options: [
      "Sensors cannot be installed in virtual environments at all",
      "The installation method is different for virtual environments and separate documentation should be followed",
      "VDI and VM environments automatically enter RFM",
      "Virtual environments require a separate CID"
    ],
    correctAnswer: "The installation method is different for virtual environments and separate documentation should be followed",
    explanation: "The training material notes that when installing Falcon in a VDI or VM, the installation method is different, and instructions in the documentation section should be followed.",
    sourceReference: "Planning checklist and resources"
  },
  {
    id: 72,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "Which of the following is part of the recommended Falcon implementation planning checklist?",
    options: [
      "Update timing planned for RFM mitigation",
      "Disabling all administrator roles until go-live",
      "Deploying without reviewing network requirements",
      "Avoiding host group creation until after 90 days"
    ],
    correctAnswer: "Update timing planned for RFM mitigation",
    explanation: "The planning checklist includes 'Update timing planned for RFM mitigation' alongside establishing administrators, setting up users/roles, and configuring network requirements.",
    sourceReference: "Planning checklist and resources"
  },
  {
    id: 73,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "easy",
    question: "According to the planning checklist, in addition to establishing administrators and configuring network requirements, what else should be planned for?",
    options: [
      "Update timing to mitigate Reduced Functionality Mode",
      "A schedule for disabling Windows Defender company-wide",
      "A rollback plan to the previous antivirus after 24 hours",
      "Automatic Foundry subscription renewal"
    ],
    correctAnswer: "Update timing to mitigate Reduced Functionality Mode",
    explanation: "The planning checklist lists 'Update timing planned for RFM mitigation' as a key planning item.",
    sourceReference: "Planning checklist and resources"
  },
  {
    id: 74,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "Which ransomware attack is cited in the training material as one of the first global ransomware attacks, infecting more than 230,000 computers in a single day across 150 countries?",
    options: ["NotPetya", "WannaCry", "Ryuk", "Conti"],
    correctAnswer: "WannaCry",
    explanation: "WannaCry, which surfaced in May 2017, spread quickly and infected more than 230,000 computers in one day across 150 countries.",
    sourceReference: "Endpoint Threats - Ransomware Attack"
  },
  {
    id: 75,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "Which type of scam is described as one of the most common attacks, where attackers gain access to an endpoint through phishing emails and then steal or misuse credentials?",
    options: ["Business Email Compromise (BEC)", "Living off the Land", "Insider Threat", "Man-in-the-middle attack"],
    correctAnswer: "Business Email Compromise (BEC)",
    explanation: "Business Email Compromise (BEC) scams are described as one of the most common attacks, where attackers gain access through phishing emails and then steal or misuse credentials.",
    sourceReference: "Endpoint Threats - Phishing and Credential Theft"
  },
  {
    id: 76,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "easy",
    question: "Which of the following is listed as one of the three main categories of endpoints in the training material?",
    options: ["Physical endpoints", "Encrypted endpoints", "Legacy endpoints", "Federated endpoints"],
    correctAnswer: "Physical endpoints",
    explanation: "The three main endpoint categories listed are physical endpoints, virtual endpoints, and cloud endpoints.",
    sourceReference: "What is an endpoint?"
  },
  {
    id: 77,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "Which of the following is explicitly listed as a common risk associated with endpoints, per the training material?",
    options: ["Lateral movement", "Improved visibility", "Reduced attack surface", "Enforced security policies"],
    correctAnswer: "Lateral movement",
    explanation: "Common endpoint risks listed are unauthorized access, malware communication, lateral movement, and data exfiltration. The other options are benefits of firewalls, not endpoint risks.",
    sourceReference: "Understanding Endpoint Security - Common Risks"
  },
  {
    id: 78,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "What does the training material identify as the earliest indicator that a major breach may be underway?",
    options: [
      "A confirmed data exfiltration event",
      "A single complaint about a slow-running endpoint, before anyone realizes it may be malicious activity",
      "A ransomware ransom note appearing on screen",
      "A firewall alert from an external IP"
    ],
    correctAnswer: "A single complaint about a slow-running endpoint, before anyone realizes it may be malicious activity",
    explanation: "The training material's helpdesk scenario illustrates: 'Every major breach starts small. A single complaint. A single endpoint. Before anyone notices, an attacker could already be exploring your network.'",
    sourceReference: "Why Endpoint Visibility Matters"
  },
  {
    id: 79,
    type: "single",
    topic: "Firewall Management",
    difficulty: "easy",
    question: "How does the training material define a firewall?",
    options: [
      "A network security device that keeps out unauthorized users and hackers by blocking them from accessing a computer",
      "A backup and recovery tool for endpoint data",
      "An encryption standard for network traffic",
      "A vulnerability scanning tool"
    ],
    correctAnswer: "A network security device that keeps out unauthorized users and hackers by blocking them from accessing a computer",
    explanation: "The material states: 'A firewall is a network security device that keeps out unauthorized users and hackers. Firewalls help to keep out intruders by blocking them from accessing your computer in the first place.'",
    sourceReference: "Firewall Management Foundations"
  },
  {
    id: 80,
    type: "single",
    topic: "Firewall Management",
    difficulty: "medium",
    question: "What are endpoint firewalls sometimes referred to as, per the training material?",
    options: ["Personal firewalls", "Perimeter firewalls", "Cloud firewalls", "Application firewalls"],
    correctAnswer: "Personal firewalls",
    explanation: "Endpoint firewalls are software that runs on endpoints and are sometimes referred to as 'personal firewalls.'",
    sourceReference: "Endpoint Security and Firewalls"
  },
  {
    id: 81,
    type: "single",
    topic: "Firewall Management",
    difficulty: "medium",
    question: "Which of the following is explicitly listed as a benefit organizations gain from endpoint firewalls, according to the training material?",
    options: [
      "Restrict unauthorized communications",
      "Eliminate the need for endpoint detection and response",
      "Guarantee zero false positives",
      "Replace the need for a Falcon sensor"
    ],
    correctAnswer: "Restrict unauthorized communications",
    explanation: "The material lists: 'This allows your organization to: Restrict unauthorized communications, Reduce attack surface, Enforce security policies, Improve visibility into endpoint network activity.'",
    sourceReference: "How Firewalls Help"
  },
  {
    id: 82,
    type: "single",
    topic: "Firewall Management",
    difficulty: "hard",
    question: "Which statement accurately reflects how Falcon Firewall Management provides centralized management across Windows, macOS, and Linux?",
    options: [
      "It manages the native OS firewall settings on each platform through a single console",
      "It provides centralized policy management while platform-specific Falcon firewall technologies (not native OS tools) enforce traffic decisions on each OS",
      "It requires a separate console per operating system, aggregated into one dashboard",
      "It only centralizes reporting; policy creation must be done per-OS locally"
    ],
    correctAnswer: "It provides centralized policy management while platform-specific Falcon firewall technologies (not native OS tools) enforce traffic decisions on each OS",
    explanation: "Key Points to Remember state: 'Falcon Firewall Management provides centralized policy management while Falcon's platform-specific firewall technologies enforce traffic decisions on Windows, macOS, and Linux endpoints.'",
    sourceReference: "Firewall Management Foundations - Key Points"
  },
  {
    id: 83,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "What is the purpose of the Falcon Fusion SOAR Content Library?",
    options: [
      "It stores raw telemetry logs for long-term retention",
      "It serves as a centralized repository for predefined and reusable components (templates, actions, conditions, triggers) used to build and manage workflows and playbooks",
      "It is a marketplace for purchasing third-party antivirus licenses",
      "It exclusively stores custom IOA rules"
    ],
    correctAnswer: "It serves as a centralized repository for predefined and reusable components (templates, actions, conditions, triggers) used to build and manage workflows and playbooks",
    explanation: "The Content Library serves as a centralized repository for predefined and reusable components used in creating and managing workflows and playbooks.",
    sourceReference: "Getting started quickly with Falcon Fusion SOAR"
  },
  {
    id: 84,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "What are Playbooks in Falcon Fusion SOAR?",
    options: [
      "Manual, step-by-step instructions that must be executed by hand outside the Falcon console",
      "Predefined or custom-configurable sets of automated workflows that integrate triggers, conditions, and actions to automate repetitive security tasks",
      "A list of approved third-party vendors",
      "A static report generated monthly"
    ],
    correctAnswer: "Predefined or custom-configurable sets of automated workflows that integrate triggers, conditions, and actions to automate repetitive security tasks",
    explanation: "Playbooks are predefined or custom-configurable sets of automated workflows that integrate triggers, conditions, and actions to automate repetitive tasks and ensure consistent responses.",
    sourceReference: "Playbooks"
  },
  {
    id: 85,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "In Falcon Fusion SOAR, what are 'Apps' (formerly known as Integrations)?",
    options: [
      "Mobile applications installed on end-user smartphones",
      "Modular, pre-built integrations or connectors enabling communication between the Falcon platform and third-party tools/services",
      "Custom scripts written entirely from scratch with no reusable components",
      "A synonym for Playbooks"
    ],
    correctAnswer: "Modular, pre-built integrations or connectors enabling communication between the Falcon platform and third-party tools/services",
    explanation: "Apps refer to modular, pre-built integrations or connectors that enable seamless communication between the Falcon platform and third-party tools, services, or systems.",
    sourceReference: "Apps (formerly known as Integrations)"
  },
  {
    id: 86,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "hard",
    question: "What is the primary purpose of the JSON schema builder in Falcon Fusion SOAR On-demand workflows?",
    options: [
      "To convert Falcon detections into PDF reports automatically",
      "To define the structure of user-provided or external inputs, ensuring data is properly formatted and validated before a workflow runs",
      "To encrypt data sent to third-party integrations",
      "To automatically generate new triggers based on historical alert volume"
    ],
    correctAnswer: "To define the structure of user-provided or external inputs, ensuring data is properly formatted and validated before a workflow runs",
    explanation: "The JSON Schema Builder allows administrators to define the structure of on-demand workflow inputs (such as a file hash, IP address, or host identifier), ensuring correct formatting and validation before the workflow runs.",
    sourceReference: "On demand trigger options"
  },
  {
    id: 87,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which of the following is explicitly listed as an area where On-demand triggers can be manually initiated within the Falcon platform?",
    options: ["Detection Details", "Sensor Update Policy Editor", "Billing and Subscription Management", "User Password Reset screen"],
    correctAnswer: "Detection Details",
    explanation: "On-demand trigger areas listed include Fusion Workflows Section, Detection Details, Host Management, Real-Time Response (RTR), Incident Management, Vulnerability Management, User Activity, Custom Dashboards, and API/Third-Party Tools.",
    sourceReference: "On demand trigger options"
  },
  {
    id: 88,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "What distinguishes an Advanced Loop from a basic Loop in Falcon Fusion SOAR?",
    options: [
      "Advanced Loops can only be used with Schedule triggers",
      "Advanced Loops add conditional logic and dynamic branching, including nested loops, complex conditions, and the ability to skip or break the loop based on criteria",
      "Advanced Loops remove the need for any conditions entirely",
      "Advanced Loops are only available for Third-Party (3P) actions"
    ],
    correctAnswer: "Advanced Loops add conditional logic and dynamic branching, including nested loops, complex conditions, and the ability to skip or break the loop based on criteria",
    explanation: "Advanced loops enhance basic loops by adding conditional logic and dynamic branching within the loop, such as nested loops and complex conditions, and allow skipping or breaking the loop based on specific criteria.",
    sourceReference: "Advanced Loops"
  },
  {
    id: 89,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "easy",
    question: "In the Falcon platform's visual workflow builder, what color and icon represents a Loop, and how is the start of the loop visually distinguished from the end?",
    options: [
      "Blue, filled circular arrows; start is outlined, end is filled",
      "Blue, circular arrows; start is filled with blue, end is only outlined in blue",
      "Green, filled arrows; no visual distinction between start and end",
      "Purple, dashed arrows; start and end look identical"
    ],
    correctAnswer: "Blue, circular arrows; start is filled with blue, end is only outlined in blue",
    explanation: "The Loop icon is blue with 2 circular arrows. The start of the loop is filled with blue, while the end of the loop is only outlined in blue.",
    sourceReference: "Advanced workflow elements - Loops"
  },
  {
    id: 90,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which of the following action types is classified as First-Party (1P) for XDR customers in Falcon Fusion SOAR?",
    options: ["Create Ticket in Jira", "Send Alert to Slack", "Isolate Endpoint", "Forward Logs to Splunk"],
    correctAnswer: "Isolate Endpoint",
    explanation: "First-Party (1P) actions for XDR customers include Isolate Endpoint, Execute RTR Commands, Get System Information, and Query Falcon Spotlight for Vulnerabilities. Jira, Slack, and Splunk actions are Third-Party (3P) examples.",
    sourceReference: "Basic workflow elements: Actions"
  },
  {
    id: 91,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which action type is described as benefiting both XDR and NG-SIEM customers (shared capabilities) in Falcon Fusion SOAR?",
    options: ["Execute Real-Time Response (RTR) Commands", "Query Threat Intelligence Feeds", "Notify via Email", "Create Ticket in ServiceNow"],
    correctAnswer: "Notify via Email",
    explanation: "Shared Capabilities (both 1P and 3P) examples include Notify via Email, Generate Reports, and Trigger Scheduled Workflows.",
    sourceReference: "Basic workflow elements: Actions"
  },
  {
    id: 92,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "hard",
    question: "What is Falcon Foundry, and how do applications built with it get used in Fusion SOAR workflows?",
    options: [
      "Foundry is a hardware appliance; its applications cannot be used in workflows",
      "Foundry is CrowdStrike's low-code application platform for building custom solutions not provided out-of-the-box; these applications can be integrated into workflows through imported actions, similar to CrowdStrike Store App integrations",
      "Foundry is exclusively for building mobile apps unrelated to Fusion SOAR",
      "Foundry applications automatically replace all existing Playbooks"
    ],
    correctAnswer: "Foundry is CrowdStrike's low-code application platform for building custom solutions not provided out-of-the-box; these applications can be integrated into workflows through imported actions, similar to CrowdStrike Store App integrations",
    explanation: "Falcon Foundry is CrowdStrike's low-code application platform allowing customers to build custom solutions and integrate third-party tools; these applications can then be integrated into workflows through imported actions, similar to CrowdStrike Store App integrations.",
    sourceReference: "Falcon Foundry"
  },
  {
    id: 93,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which trigger type in Falcon Fusion SOAR is initiated when a host enters a fully provisioned state, reduced functionality mode, or a connected state?",
    options: ["Host state event trigger", "Cloud security assessment trigger", "Vulnerabilities user action trigger", "Identity account event trigger"],
    correctAnswer: "Host state event trigger",
    explanation: "The Host state event trigger option triggers a workflow when a host enters a fully provisioned state, reduced functionality mode, or a connected state.",
    sourceReference: "Event trigger options"
  },
  {
    id: 94,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "hard",
    question: "Which event trigger option specifically requires a Falcon Insight LogScale or Falcon Log Management subscription?",
    options: ["Alert", "Phishing email", "Host state", "Cloud security assessment"],
    correctAnswer: "Phishing email",
    explanation: "The Phishing email trigger option requires a Falcon Insight LogScale or Falcon Log Management subscription, setting up a trigger for when a user reports a phishing email from a supported email service.",
    sourceReference: "Event trigger options"
  },
  {
    id: 95,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "easy",
    question: "What does a CVE identifier (CVE ID) represent?",
    options: [
      "A CrowdStrike-specific internal risk score",
      "A unique identifier for a vulnerability as catalogued in the National Vulnerability Database (NVD)",
      "The name of the remediation patch",
      "A severity rating from 1 to 10"
    ],
    correctAnswer: "A unique identifier for a vulnerability as catalogued in the National Vulnerability Database (NVD)",
    explanation: "A CVE identifier (CVE ID) is a unique identifier for a vulnerability as catalogued in the National Vulnerability Database (NVD).",
    sourceReference: "Vulnerability Management Terminology"
  },
  {
    id: 96,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "What is ExPRT.AI?",
    options: [
      "CrowdStrike's predictive rating system that prioritizes vulnerabilities by risk (Critical, High, Medium, Low) based on exploit status and threat intel",
      "A third-party vulnerability scanner integrated via the CrowdStrike Store",
      "The engine that generates Custom IOA rules",
      "A dashboard exclusively for asset inventory"
    ],
    correctAnswer: "CrowdStrike's predictive rating system that prioritizes vulnerabilities by risk (Critical, High, Medium, Low) based on exploit status and threat intel",
    explanation: "ExPRT.AI is CrowdStrike's predictive rating system that prioritizes vulnerabilities by the risk they pose (Critical, High, Medium, or Low) based on exploit status and other threat intel.",
    sourceReference: "Vulnerability Management Terminology"
  },
  {
    id: 97,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "What does 'Supersedence' mean in the context of Vulnerability Management remediation?",
    options: [
      "Deleting a vulnerability record without remediation",
      "Replacing an earlier patch with a later, typically cumulative, patch that has higher priority",
      "Suppressing a vulnerability alert permanently",
      "Automatically closing tickets after 45 days"
    ],
    correctAnswer: "Replacing an earlier patch with a later, typically cumulative, patch that has higher priority",
    explanation: "Supersedence refers to replacing an earlier patch with a later patch; Microsoft commonly publishes a single cumulative patch with higher supersedence than the earlier patches it includes.",
    sourceReference: "Vulnerability Management Terminology - Supersedence"
  },
  {
    id: 98,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "Vulnerability Management recommends which type of patch or update for each vulnerability?",
    options: [
      "The oldest available patch, to ensure maximum compatibility testing",
      "The highest supersedence patch or update",
      "Any patch chosen at random from the vendor's release notes",
      "Only patches released within the last 24 hours"
    ],
    correctAnswer: "The highest supersedence patch or update",
    explanation: "Vulnerability Management recommends the highest supersedence patch or update for each vulnerability, and vulnerabilities can be grouped by remediation to prioritize fixes that address the most vulnerabilities.",
    sourceReference: "Vulnerability Management Terminology - Remediation"
  },
  {
    id: 99,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "What subscription is required to use Falcon Vulnerability Management, according to the training material?",
    options: [
      "No subscription is required; it is included with every Falcon sensor",
      "A subscription to Falcon Exposure Management (a Falcon Insight XDR add-on)",
      "A standalone Vulnerability Management license unrelated to any other Falcon product",
      "A Foundry subscription only"
    ],
    correctAnswer: "A subscription to Falcon Exposure Management (a Falcon Insight XDR add-on)",
    explanation: "The material states you need a subscription to Falcon Exposure Management (a Falcon Insight XDR add-on) to use Vulnerability Management.",
    sourceReference: "Falcon Setup (Vulnerability Management)"
  },
  {
    id: 100,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "easy",
    question: "Does Falcon Vulnerability Management require deploying additional scanning software or hardware to identify vulnerabilities?",
    options: [
      "Yes, a dedicated vulnerability scanner must be deployed to each host",
      "No, it uses the existing Falcon sensor already installed on each host",
      "Yes, but only for Linux hosts",
      "No, but it requires a separate network appliance"
    ],
    correctAnswer: "No, it uses the existing Falcon sensor already installed on each host",
    explanation: "Vulnerability Management uses your existing Falcon sensors to automatically identify vulnerabilities on each host; no additional software or hardware needs to be installed.",
    sourceReference: "Vulnerability Management Overview"
  },
  {
    id: 101,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "Which of the following is explicitly listed under 'Visibility of Assets' in Falcon Asset Management?",
    options: [
      "Track suspicious login events",
      "Review drive encryption status",
      "Assess license compliance",
      "Track logins by account type"
    ],
    correctAnswer: "Review drive encryption status",
    explanation: "Visibility of Assets includes reviewing drive encryption status. Tracking suspicious/account-type logins falls under Visibility of Accounts, and license compliance falls under Visibility of Applications.",
    sourceReference: "Asset Management Features - Visibility of Assets"
  },
  {
    id: 102,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "Which of the following is explicitly listed under 'Visibility of Accounts' in Falcon Asset Management?",
    options: [
      "Identify assets running end-of-support operating systems",
      "Track whether domain or local credentials are used",
      "Group applications and analyze hosts with unauthorized applications",
      "Gain visibility into all browser extensions installed"
    ],
    correctAnswer: "Track whether domain or local credentials are used",
    explanation: "Visibility of Accounts includes tracking whether domain or local credentials are used. End-of-support OS identification falls under Assets, and application/browser-extension visibility falls under Applications.",
    sourceReference: "Asset Management Features - Visibility of Accounts"
  },
  {
    id: 103,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "Which of the following is explicitly listed under 'Visibility of Applications' in Falcon Asset Management?",
    options: [
      "Map relationships across managed assets",
      "Track account usage across all managed assets",
      "Detect and isolate hosts running applications with suspicious behavior",
      "Locate unmanaged assets to install the Falcon sensor"
    ],
    correctAnswer: "Detect and isolate hosts running applications with suspicious behavior",
    explanation: "Visibility of Applications includes detecting and isolating hosts running applications with suspicious behavior. Mapping asset relationships and locating unmanaged assets fall under Assets; tracking account usage falls under Accounts.",
    sourceReference: "Asset Management Features - Visibility of Applications"
  },
  {
    id: 104,
    type: "single",
    topic: "Asset Management",
    difficulty: "easy",
    question: "What is the Asset Graph in Falcon Asset Management?",
    options: [
      "A bar chart showing asset counts by department",
      "An interactive map to better understand the relationship between managed assets and accounts in the environment",
      "A report exported only in PDF format",
      "A dashboard exclusively for tracking Falcon sensor versions"
    ],
    correctAnswer: "An interactive map to better understand the relationship between managed assets and accounts in the environment",
    explanation: "The Asset Graph is an interactive map to better understand the relationship between managed assets and accounts in your environment.",
    sourceReference: "Asset Management Terminology"
  },
  {
    id: 105,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "What does 'System Insights' refer to in the Assets module?",
    options: [
      "A dashboard displaying hardware inventory information for managed assets, such as processors, disk and memory usage, drive encryption status, and BIOS",
      "A list of all installed applications across the environment",
      "A report of failed login attempts",
      "A summary of firewall rule violations"
    ],
    correctAnswer: "A dashboard displaying hardware inventory information for managed assets, such as processors, disk and memory usage, drive encryption status, and BIOS",
    explanation: "System Insights is a dashboard in the Assets module that displays hardware inventory information for managed assets, including processors, disk and memory usage, drive encryption status, and BIOS.",
    sourceReference: "Asset Management Terminology"
  },
  {
    id: 106,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "How does the training material define a 'Used Application,' and what important limitation applies to this definition?",
    options: [
      "Any application ever installed, with no time limit; available for all operating systems including Linux",
      "An application used at least once on a managed asset within the past 45 days; this data is not available for Linux assets",
      "An application requiring a paid license, tracked only on Windows",
      "Any application flagged as suspicious by machine learning"
    ],
    correctAnswer: "An application used at least once on a managed asset within the past 45 days; this data is not available for Linux assets",
    explanation: "A Used Application is defined as an application that has been used at least once on a managed asset within the past 45 days, and this data is explicitly noted as not available for Linux assets.",
    sourceReference: "Asset Management Terminology"
  },
  {
    id: 107,
    type: "single",
    topic: "Asset Management",
    difficulty: "easy",
    question: "What subscription options allow an organization to use Falcon Asset Management, according to the training material?",
    options: [
      "A subscription to Asset Management with a Falcon Insight XDR add-on, or a Falcon Exposure Management subscription",
      "Asset Management is included free with every Falcon deployment",
      "Only a standalone Asset Management license, sold separately from all other modules",
      "A Foundry subscription is mandatory"
    ],
    correctAnswer: "A subscription to Asset Management with a Falcon Insight XDR add-on, or a Falcon Exposure Management subscription",
    explanation: "To use Asset Management, a subscription to Asset Management with a Falcon Insight XDR add-on is required; it is also available with a Falcon Exposure Management subscription.",
    sourceReference: "Asset Management Roles - Subscription"
  },
  {
    id: 108,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "Which Asset Management role has 'View' access to data, reports, and configurations, but based on the roles table, does NOT have the ability to configure rules and application groups?",
    options: ["Falcon Administrator", "Exposure Management Manager", "Event Viewer", "Exposure Asset Admin"],
    correctAnswer: "Event Viewer",
    explanation: "In the Asset Management Roles table, Falcon Administrator, Exposure Management Manager, and Exposure Asset Admin all have both View and Configure permissions. Event Viewer has View-only access.",
    sourceReference: "Asset Management Roles"
  },
  {
    id: 109,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "medium",
    question: "Which of the following is explicitly listed as a common risk associated with mobile devices, per the training material?",
    options: ["Unsecured Wi-Fi networks", "Excessive battery life", "Automatic firmware rollback", "Overly restrictive app permissions"],
    correctAnswer: "Unsecured Wi-Fi networks",
    explanation: "Common Mobile Risks listed are malicious applications, unsecured Wi-Fi networks, device compromise, unauthorized access to corporate data, and risky device configurations.",
    sourceReference: "Common Mobile Risks"
  },
  {
    id: 110,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "medium",
    question: "Falcon for Mobile can optionally provide visibility into Bluetooth-related activity. How does this visibility differ between Android and iOS?",
    options: [
      "It is identical on both platforms: full Bluetooth device visibility",
      "On Android, it can show connected Bluetooth devices; on iOS, it is limited to Bluetooth Low Energy (BLE) devices",
      "Bluetooth visibility is unavailable on both platforms",
      "Only iOS supports Bluetooth visibility; Android does not"
    ],
    correctAnswer: "On Android, it can show connected Bluetooth devices; on iOS, it is limited to Bluetooth Low Energy (BLE) devices",
    explanation: "Additional Visibility options list 'Bluetooth devices (Android)' and 'Bluetooth Low Energy Devices (iOS)' separately, reflecting the platform-specific difference.",
    sourceReference: "Additional Visibility (Falcon for Mobile)"
  },
  {
    id: 111,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "easy",
    question: "Which deployment model is best suited for employee-owned mobile devices, according to the training material's 'Choosing the Right Approach' guidance?",
    options: ["MDM", "BYOD", "Zero-touch enrollment exclusively", "Agentless deployment"],
    correctAnswer: "BYOD",
    explanation: "The Choosing the Right Approach table states BYOD is best for employee-owned devices, while MDM is best for corporate-managed devices.",
    sourceReference: "Choosing the Right Approach"
  },
  {
    id: 112,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "medium",
    question: "In a BYOD deployment of Falcon for Mobile, what is the enrollment process?",
    options: [
      "IT pre-installs the app on every device before distribution",
      "Users install the Falcon application themselves, and enrollment invitations are sent through Falcon for users to complete manually",
      "Enrollment happens automatically without any user action",
      "BYOD devices cannot be enrolled at all"
    ],
    correctAnswer: "Users install the Falcon application themselves, and enrollment invitations are sent through Falcon for users to complete manually",
    explanation: "In a BYOD deployment, users install the Falcon application themselves; enrollment invitations are sent through Falcon and users complete enrollment manually.",
    sourceReference: "Bring Your Own Device (BYOD)"
  },
  {
    id: 113,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "medium",
    question: "Which benefit of Falcon for Mobile allows security teams to view mobile security information alongside laptops, desktops, and servers in one place?",
    options: ["Lightweight Protection", "Unified Security Operations", "Mobile Threat Detection", "Real-Time Visibility"],
    correctAnswer: "Unified Security Operations",
    explanation: "Unified Security Operations is listed as a key benefit: viewing mobile security information alongside laptops, desktops, and servers.",
    sourceReference: "Key Benefits (Falcon for Mobile)"
  },
  {
    id: 114,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "What is a stated 'Con' of the Falcon-only implementation strategy (uninstalling the alternative antivirus and installing CrowdStrike as the only AV)?",
    options: [
      "Ongoing complexity and alert duplication",
      "Potential security gaps during transition and higher short-term risk",
      "Temporary complexity and some performance impact",
      "Higher cost with no simplification of management"
    ],
    correctAnswer: "Potential security gaps during transition and higher short-term risk",
    explanation: "The Cons of a Falcon-only deployment are listed as potential security gaps during transition and higher short-term risk. The other options describe cons of the coexistence strategies instead.",
    sourceReference: "Establishing an implementation strategy - CrowdStrike Falcon only"
  },
  {
    id: 115,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "What is a stated 'Pro' of the short-term coexistence implementation strategy?",
    options: [
      "Clean slate and cost savings",
      "Complementary security layers and defense-in-depth",
      "Controlled transition, ability to tune and validate, reduced risk",
      "Simplified management with no performance impact"
    ],
    correctAnswer: "Controlled transition, ability to tune and validate, reduced risk",
    explanation: "Short-term coexistence Pros are listed as controlled transition, ability to tune and validate, and reduced risk.",
    sourceReference: "Establishing an implementation strategy - Short-term coexistence"
  },
  {
    id: 116,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "hard",
    question: "During a Coverage Gap Analysis for a complete Falcon cutover, what specific finding does the training material use as an illustrative example?",
    options: [
      "A permanent loss of endpoint visibility with no resolution path",
      "A possible 3-5 day window where newly onboarded systems could lack certain behavioral monitoring capabilities the prior tool provided",
      "An immediate doubling of licensing costs",
      "A mandatory 90-day parallel run before cutover"
    ],
    correctAnswer: "A possible 3-5 day window where newly onboarded systems could lack certain behavioral monitoring capabilities the prior tool provided",
    explanation: "The Coverage Gap Analysis example states a complete cutover could reveal a 3-5-day window where newly onboarded systems lack certain behavioral monitoring capabilities the existing tool provided.",
    sourceReference: "Take the following into consideration when choosing a strategy"
  },
  {
    id: 117,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "What does 'Operational Overhead Calculation' involve when choosing an implementation strategy?",
    options: [
      "Estimating hardware costs for new servers only",
      "Quantifying administrative burden by tracking console management time, alert triage workflows, and policy synchronization needs",
      "Calculating the exact number of detections generated per day",
      "Measuring network bandwidth consumption exclusively"
    ],
    correctAnswer: "Quantifying administrative burden by tracking console management time, alert triage workflows, and policy synchronization needs",
    explanation: "Operational Overhead Calculation involves quantifying the administrative burden of each approach by tracking console management time, alert triage workflows, and policy synchronization needs.",
    sourceReference: "Take the following into consideration when choosing a strategy"
  },
  {
    id: 118,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "Which challenge is explicitly listed as a consequence of implementing Falcon without a clear strategy?",
    options: [
      "Automatic vendor lock-in penalties",
      "Rushed deployments causing operational disruptions",
      "Immediate loss of the Falcon subscription",
      "Mandatory downtime exceeding 72 hours"
    ],
    correctAnswer: "Rushed deployments causing operational disruptions",
    explanation: "Without a clear strategy, organizations typically face challenges including rushed deployments causing operational disruptions, inadequate testing, security gaps, and difficulty determining root causes.",
    sourceReference: "Without a clear strategy, organizations typically face several challenges"
  },
  {
    id: 119,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "Which factor should be examined during a 'Sensor Compatibility Assessment' when planning an implementation strategy?",
    options: [
      "Whether the organization has enough Falcon Administrator accounts",
      "Potential conflicts between Falcon and the existing security solution, including device performance impact from running multiple full-scale scans simultaneously",
      "Whether the CID has been correctly rotated",
      "Whether the Foundry subscription is active"
    ],
    correctAnswer: "Potential conflicts between Falcon and the existing security solution, including device performance impact from running multiple full-scale scans simultaneously",
    explanation: "Sensor Compatibility Assessment involves examining potential conflicts between Falcon and the existing solution, including possible device performance impact from running multiple full-scale scans simultaneously.",
    sourceReference: "Take the following into consideration when choosing a strategy"
  },
  {
    id: 120,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "Which cloud environment's FQDNs include 'ts01-gyr-maverick.cloudsink.net'?",
    options: ["US-1", "US-2", "US-GOV-1", "Falcon EU Cloud"],
    correctAnswer: "US-2",
    explanation: "The Cloud Network address table lists 'ts01-gyr-maverick.cloudsink.net' under the US-2 cloud environment.",
    sourceReference: "Network Requirements - Cloud Network address table"
  },
  {
    id: 121,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "If an organization's network requires allowlisting by IP address rather than FQDN, where should the administrator look for the relevant information?",
    options: [
      "The User Management page",
      "Cloud IP Addresses documentation in the Support section",
      "The Sensor Health dashboard",
      "The Fusion SOAR Content Library"
    ],
    correctAnswer: "Cloud IP Addresses documentation in the Support section",
    explanation: "The material states: 'If your network requires allowlisting by IP address, instead of FQDN, see Cloud IP Addresses in the Support documentation for a list of IP addresses we use.'",
    sourceReference: "Network Requirements"
  },
  {
    id: 122,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "easy",
    question: "What port does the Falcon sensor use to communicate with the CrowdStrike cloud?",
    options: ["Port 80", "Port 443", "Port 8080", "Port 22"],
    correctAnswer: "Port 443",
    explanation: "The material states you need to allow TLS traffic on Port 443 between your network and CrowdStrike's Cloud Network addresses.",
    sourceReference: "Network configuration"
  },
  {
    id: 123,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "The training material notes that CrowdStrike uses which cloud provider for some communications between hosts and the CrowdStrike cloud?",
    options: ["Google Cloud Platform", "Microsoft Azure", "Amazon Web Services (AWS)", "Oracle Cloud Infrastructure"],
    correctAnswer: "Amazon Web Services (AWS)",
    explanation: "The material notes: 'We use AWS for some communications between hosts and the CrowdStrike cloud.'",
    sourceReference: "Network Requirements"
  },
  {
    id: 124,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "Where can an administrator find the exact supported operating system versions for a Falcon sensor deployment?",
    options: [
      "OS Specific deployment guides under Support and resources > Documentation",
      "The Fusion SOAR Content Library",
      "The Asset Management roles table",
      "The Vulnerability Management terminology glossary"
    ],
    correctAnswer: "OS Specific deployment guides under Support and resources > Documentation",
    explanation: "The material repeatedly directs administrators to OS Specific deployment guides accessible via Support and resources > Documentation for exact supported version information.",
    sourceReference: "Falcon Sensor Pre-Installation Requirements"
  },
  {
    id: 125,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "hard",
    question: "For Linux sensor deployment, what happens if a host's kernel version is not listed in the deployment guide's supported kernel list?",
    options: [
      "The sensor installation is blocked entirely and cannot proceed",
      "The sensor may install but will run in Reduced Functionality Mode until updated to support that kernel version",
      "The sensor automatically downgrades the kernel",
      "The host is automatically excluded from all host groups"
    ],
    correctAnswer: "The sensor may install but will run in Reduced Functionality Mode until updated to support that kernel version",
    explanation: "If a kernel is not listed, the sensor may install but will run in RFM. It will continue to operate in RFM until the Falcon sensor is updated to support that kernel version.",
    sourceReference: "Falcon Sensor Pre-Installation Requirements (Linux)"
  },
  {
    id: 126,
    type: "single",
    topic: "Dashboards",
    difficulty: "easy",
    question: "Where in the Falcon console can an administrator access the Dashboard interface to build and customize dashboards?",
    options: [
      "Dashboards and reports > Dashboards > All dashboards",
      "Host setup and management > User management",
      "Support and resources > Documentation",
      "Next-Gen SIEM > Workflows"
    ],
    correctAnswer: "Dashboards and reports > Dashboards > All dashboards",
    explanation: "The Dashboard interface is accessed via Dashboards and reports > Dashboards > All dashboards.",
    sourceReference: "Accessing Dashboards"
  },
  {
    id: 127,
    type: "single",
    topic: "Dashboards",
    difficulty: "medium",
    question: "Which dashboard type is described as the 'original dashboard offering,' providing basic customization using widgets tied to single or multiple data sources?",
    options: ["Foundry Dashboards", "Legacy Dashboards", "Preset Dashboards", "Shared Dashboards"],
    correctAnswer: "Legacy Dashboards",
    explanation: "Legacy Dashboards are described as the original dashboard offering, providing basic customization using widgets tied to single or multiple data sources.",
    sourceReference: "Accessing Dashboards"
  },
  {
    id: 128,
    type: "single",
    topic: "Dashboards",
    difficulty: "medium",
    question: "Which dashboard type is visible only if the organization has a Foundry subscription?",
    options: ["Private Dashboards", "Shared Dashboards", "Foundry Dashboards", "Legacy Dashboards"],
    correctAnswer: "Foundry Dashboards",
    explanation: "The material notes: 'The Foundry Dashboard is visible only if your organization has a Foundry subscription.'",
    sourceReference: "Accessing Dashboards"
  },
  {
    id: 129,
    type: "single",
    topic: "System & Network Requirements",
    difficulty: "medium",
    question: "Which statement about Windows RFM is accurate regarding administrator action?",
    options: [
      "An administrator must manually approve every Windows Falcon sensor exiting RFM",
      "No administrator action is required for a Windows host to exit RFM after CrowdStrike certifies compatibility through the cloud",
      "An administrator must reinstall the sensor to exit RFM",
      "An administrator must manually disable Windows Update to exit RFM"
    ],
    correctAnswer: "No administrator action is required for a Windows host to exit RFM after CrowdStrike certifies compatibility through the cloud",
    explanation: "The material states: 'After 48 hours, CrowdStrike certifies compatibility through the cloud, preventing RFM on later updates. No administrator action is required.'",
    sourceReference: "Reduced Functionality Mode - Windows RFM"
  },
  {
    id: 130,
    type: "single",
    topic: "Firewall Management",
    difficulty: "medium",
    question: "Which statement about Falcon Firewall Management's cross-platform approach is accurate?",
    options: [
      "Administrators must learn and manage a completely separate firewall tool for each operating system",
      "Falcon provides a unified policy management experience across supported platforms while leveraging platform-specific technologies behind the scenes",
      "Firewall rules configured for Windows automatically apply to macOS and Linux without modification",
      "Falcon Firewall Management is only available as an add-on to a third-party vendor's firewall"
    ],
    correctAnswer: "Falcon provides a unified policy management experience across supported platforms while leveraging platform-specific technologies behind the scenes",
    explanation: "Rather than requiring administrators to learn and manage separate firewall tools per OS, Falcon provides a unified policy management experience across supported platforms while leveraging platform-specific technologies behind the scenes.",
    sourceReference: "Cross-Platform Firewall Management"
  },
  {
    id: 131,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "easy",
    question: "Falcon Fusion SOAR is best described as which type of platform?",
    options: [
      "A standalone antivirus product",
      "CrowdStrike's security orchestration, automation, and response platform, integrated with Next-Gen SIEM and other CrowdStrike modules",
      "A hardware firewall appliance",
      "A third-party ticketing system"
    ],
    correctAnswer: "CrowdStrike's security orchestration, automation, and response platform, integrated with Next-Gen SIEM and other CrowdStrike modules",
    explanation: "Falcon Fusion SOAR is described as CrowdStrike's security orchestration, automation, and response platform, seamlessly integrated with Next-Gen SIEM and other CrowdStrike modules.",
    sourceReference: "Introduction to Falcon Fusion SOAR"
  },
  {
    id: 132,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "Which trigger type in Fusion SOAR is best suited for a recurring monthly endpoint health check that queries coverage and identifies hosts in RFM?",
    options: ["Event trigger", "Schedule trigger", "On demand trigger", "Loop trigger"],
    correctAnswer: "Schedule trigger",
    explanation: "The Monthly Endpoint Health Check example (querying endpoint coverage, identifying RFM hosts, and reporting to IT operations) is presented under Schedule trigger options.",
    sourceReference: "Schedule trigger options"
  },
  {
    id: 133,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "medium",
    question: "In a Fusion SOAR workflow using an OR operator across two conditions (severity >= high OR tactic includes specified host groups), which scenario triggers the action?",
    options: [
      "Only when both conditions are true simultaneously",
      "When either condition alone is true, or when both are true",
      "Never, since OR conditions cannot trigger actions alone",
      "Only when neither condition is true"
    ],
    correctAnswer: "When either condition alone is true, or when both are true",
    explanation: "With OR operators, the overall condition evaluates to true if any one or more of the included conditions are true.",
    sourceReference: "Basic workflow elements: Conditions"
  },
  {
    id: 134,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "Which Vulnerability Management status applies to a vulnerability that has been identified and is unremediated?",
    options: ["Open", "Closed", "Suppressed", "Expired"],
    correctAnswer: "Open",
    explanation: "The Open status is defined as: 'Vulnerability is identified and unremediated.'",
    sourceReference: "Vulnerability Management Terminology - Status"
  },
  {
    id: 135,
    type: "single",
    topic: "Vulnerability Management",
    difficulty: "medium",
    question: "Which Vulnerability Management status applies to a vulnerability that has been identified and hidden using a suppression rule?",
    options: ["Closed", "Suppressed", "Expired", "Reopened"],
    correctAnswer: "Suppressed",
    explanation: "The Suppressed status is defined as: 'Vulnerability is identified and suppressed with a suppression rule.'",
    sourceReference: "Vulnerability Management Terminology - Status"
  },
  {
    id: 136,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "Which Asset Management term describes any hardware or virtual machine in the environment, such as a laptop or server?",
    options: ["Account", "Application", "Asset", "Managed Asset"],
    correctAnswer: "Asset",
    explanation: "An Asset is defined as any hardware or virtual machine in the environment, such as a laptop or server. Managed Asset is a more specific subtype (an asset with a sensor installed).",
    sourceReference: "Asset Management Terminology"
  },
  {
    id: 137,
    type: "single",
    topic: "Asset Management",
    difficulty: "medium",
    question: "Which Asset Management term describes any username with access to the environment, such as a domain user, local user, or service account?",
    options: ["Asset", "Account", "Application", "Installed Application"],
    correctAnswer: "Account",
    explanation: "An Account is defined as any username with access to the environment, such as a domain user, local user, or service account.",
    sourceReference: "Asset Management Terminology"
  },
  {
    id: 138,
    type: "single",
    topic: "Implementation Strategy",
    difficulty: "medium",
    question: "Which implementation approach requires uninstalling the alternative antivirus and installing CrowdStrike as the sole solution?",
    options: ["Short-term coexistence", "Long-term coexistence", "CrowdStrike Falcon only", "Sensor Compatibility Assessment"],
    correctAnswer: "CrowdStrike Falcon only",
    explanation: "The CrowdStrike Falcon only strategy requires uninstalling the alternative antivirus and installing CrowdStrike as the only antivirus in the environment.",
    sourceReference: "Establishing an implementation strategy"
  },
  {
    id: 139,
    type: "single",
    topic: "Falcon for Mobile",
    difficulty: "medium",
    question: "Which of the following is explicitly stated as something Falcon for Mobile CAN collect, depending on configuration and policy settings?",
    options: ["Emails", "Device posture information", "Chat conversations", "Social media content"],
    correctAnswer: "Device posture information",
    explanation: "Falcon for Mobile can collect security-relevant telemetry such as network activity, device posture information, operating system events, app installations, and battery/device statistics - but not personal content like emails or chat conversations.",
    sourceReference: "What Data does Falcon for Mobile Collect?"
  },
  {
    id: 140,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "medium",
    question: "Which Endpoint Security feature is explicitly listed as part of its feature set, alongside NGAV and EDR?",
    options: ["Cloud Security Posture Management", "USB Device Control", "Identity Threat Detection & Response", "Data Classification"],
    correctAnswer: "USB Device Control",
    explanation: "Endpoint Security features listed are Next-Generation Anti-Virus (NGAV), Endpoint Detection & Response (EDR), USB Device Control, Prevention Policies, Firewall Policies, and more.",
    sourceReference: "Endpoint Security"
  },
  {
    id: 141,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "medium",
    question: "Which module's features include Falcon Shield (SSPM) and Domain Security?",
    options: ["Data Protection", "Next-Gen Identity Protection", "Exposure Management", "Counter Adversary Operations"],
    correctAnswer: "Next-Gen Identity Protection",
    explanation: "Next-Gen Identity Protection features include Falcon Shield (SSPM), Domain Security, Identity Threat Detection & Response (ITDR), Privileged Users, Identity Policies, and Risk-based MFA Enforcement.",
    sourceReference: "Next-Gen Identity Protection"
  },
  {
    id: 142,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "medium",
    question: "Which module's features include Active Asset Discovery and Attack Path Visualization?",
    options: ["Exposure Management", "Data Protection", "Counter Adversary Operations", "IT Automation"],
    correctAnswer: "Exposure Management",
    explanation: "Exposure Management features include Active Asset Discovery, Vulnerability Management, External Attack Surface Management (EASM), Software Configuration Assessment (SCA), and Attack Path Visualization.",
    sourceReference: "Exposure Management"
  },
  {
    id: 143,
    type: "single",
    topic: "Falcon Fusion SOAR",
    difficulty: "hard",
    question: "Which Fusion SOAR role has event-query access limited to Falcon EDR, Vulnerability Management, and Incident data, rather than full 'All Falcon modules' access?",
    options: ["Falcon Administrator", "XDR Administrator", "Falcon Investigator", "Falcon Security Lead"],
    correctAnswer: "Falcon Investigator",
    explanation: "In the Fusion SOAR roles table, Falcon Investigator's event-query data source access is limited to Falcon EDR, Vulnerability Management, and Incident data, unlike Falcon Administrator, XDR Administrator, and Falcon Security Lead, which have access to all Falcon modules and third-party integrations.",
    sourceReference: "Falcon Fusion SOAR roles"
  },
  {
    id: 144,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "medium",
    question: "Which module description explicitly mentions 'petabyte-scale, lightning-fast data collection, search and storage'?",
    options: ["Data Protection", "Next-Gen SIEM", "Counter Adversary Operations", "Exposure Management"],
    correctAnswer: "Next-Gen SIEM",
    explanation: "The material states security teams can transform investigation speed with 'petabyte-scale, lightning-fast data collection, search and storage powered by our innovative CrowdStrike Falcon Next-Gen SIEM.'",
    sourceReference: "Why This Architecture Matters"
  },
  {
    id: 145,
    type: "single",
    topic: "Platform Architecture Overview",
    difficulty: "medium",
    question: "According to the training material, approximately how many different security tools do security teams juggle on average?",
    options: ["10", "25", "45", "100"],
    correctAnswer: "45",
    explanation: "The material states: 'Security teams, on average, juggle as many as 45 different security tools.'",
    sourceReference: "Why This Architecture Matters"
  },
  {
    id: 146,
    type: "single",
    topic: "Platform Architecture Overview",
    difficulty: "medium",
    question: "What is the average eCrime breakout time cited in the training material?",
    options: ["8 minutes", "48 minutes", "4 hours", "24 hours"],
    correctAnswer: "48 minutes",
    explanation: "The material cites 'the average eCrime breakout time being just 48 minutes from the time an adversary first gains entry to your network to the time when they are moving laterally across your systems.'",
    sourceReference: "Why This Architecture Matters"
  },
  {
    id: 148,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "medium",
    question: "Which Core Falcon module description explicitly mentions 'elite threat hunting, adversary intelligence, and real-time attack analysis to track nation-state and eCrime actors'?",
    options: ["Counter Adversary Operations", "Exposure Management", "Data Protection", "IT Automation"],
    correctAnswer: "Counter Adversary Operations",
    explanation: "Counter Adversary Operations is described as combining elite threat hunting, adversary intelligence, and real-time attack analysis to track nation-state and eCrime actors.",
    sourceReference: "Counter Adversary Operations (Threat Intelligence)"
  },
  {
    id: 149,
    type: "single",
    topic: "Core Falcon Modules",
    difficulty: "medium",
    question: "Which of the following is listed as a feature of Counter Adversary Operations?",
    options: ["Dark Web Monitoring", "USB Device Control", "Data Classification", "Container Security"],
    correctAnswer: "Dark Web Monitoring",
    explanation: "Counter Adversary Operations features listed are Adversary Intelligence, Threat Hunting, Threat intelligence agent, and Dark Web Monitoring.",
    sourceReference: "Counter Adversary Operations (Threat Intelligence)"
  },
  {
    id: 150,
    type: "single",
    topic: "Endpoint Security Fundamentals",
    difficulty: "hard",
    question: "Which statement best describes the relationship between the Falcon sensor's role and the CrowdStrike cloud in generating detections?",
    options: [
      "All detection logic runs entirely on the endpoint sensor with no cloud involvement",
      "The sensor captures and tags telemetry in real time and sends it securely to the cloud, where machine learning and AI models analyze it to identify potential threats, which then surface in the console",
      "The cloud only stores historical logs and plays no role in threat analysis",
      "Detections are generated randomly and later validated by analysts"
    ],
    correctAnswer: "The sensor captures and tags telemetry in real time and sends it securely to the cloud, where machine learning and AI models analyze it to identify potential threats, which then surface in the console",
    explanation: "Telemetry flows from the endpoint, through the Falcon sensor (which captures and tags activity in real time), into the Falcon cloud (where ML/AI analyze it), with results surfacing in the Falcon console as detections and incidents.",
    sourceReference: "How CrowdStrike Falcon sees Everything"
  }
];
