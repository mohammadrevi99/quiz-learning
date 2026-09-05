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
  }
];
