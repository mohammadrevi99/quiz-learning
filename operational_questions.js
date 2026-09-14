// CCFA-200b OPERATIONAL EXAM PRACTICE POOL
// Source A: User-provided practice dump (40 questions), answers corrected/verified
//   against CrowdStrike documentation and a third-party exam-prep site with
//   revealed official answers + explanations (pass4success.com) where possible.
// Source B: 28 new questions targeting the weakest domains from the user's real
//   exam score report (User Management 20%, Sensor Deployment 42%, Workflows 50%),
//   grounded in established CrowdStrike Falcon admin concepts. Confidence is marked
//   per question since no single authoritative document covers 100% of these.
//
// examDomain values match the official CCFA-200b blueprint (confirmed via
// pass4success.com domain descriptions, which matches the user's own exam
// score report section names exactly):
//   User Management | Sensor Deployment | Host Management and Setup |
//   Group Creation | Policy Application | Rules Configuration |
//   Dashboards and Reports | Workflows

window.OPERATIONAL_QUESTION_BANK = [
  {
    id: 2001,
    type: "single",
    examDomain: "Dashboards and Reports",
    difficulty: "medium",
    confidence: "medium",
    question: "A Falcon sensor in your environment is generating alerts for a binary that has already been allowlisted. Which report can be used to determine if this is caused by a stale prevention policy?",
    options: [
      "Sensor Visibility Exclusions Audit Log",
      "Prevention Policy Debug Audit Log",
      "Prevention Policy Audit Log",
      "Machine-Learning Prevention Monitoring Audit Log"
    ],
    correctAnswer: "Prevention Policy Audit Log",
    explanation: "The Prevention Policy Audit Log tracks the history of prevention policy changes and assignments, which is what you'd check to confirm whether a host group is still running an outdated (stale) policy version rather than the updated allowlist.",
    sourceReference: "Practice dump (unverified against official docs)"
  },
  {
    id: 2002,
    type: "single",
    examDomain: "Rules Configuration",
    difficulty: "medium",
    confidence: "high",
    question: "An internally used customer application is being blocked by the Falcon sensor. The application is updated infrequently. Which IOC type and action should you set to allow use of the application?",
    options: [
      "Add the domain of the application host location and set action to No Action",
      "Add the IPs the application uses and set action to No Action",
      "Add the name of the application and set action to Allow",
      "Add the hash of the application and set action to Allow"
    ],
    correctAnswer: "Add the hash of the application and set action to Allow",
    explanation: "Hash-based IOCs are the appropriate mechanism for allowlisting a specific binary. Since the application updates infrequently, the hash will stay valid for a meaningful period, and setting the action to Allow explicitly permits it despite other detections.",
    sourceReference: "Practice dump"
  },
  {
    id: 2003,
    type: "single",
    examDomain: "Policy Application",
    difficulty: "medium",
    confidence: "medium",
    question: "When deploying the Falcon Sensor alongside an existing security solution, you have aligned to the Phase 2: Interim Protection prevention policy in Falcon. After initial testing, what is the recommended configuration?",
    options: [
      "Maintain current AV solution posture",
      "Disable or remove the other AV solution",
      "Create an SVE only in Falcon for the current AV solution",
      "Create an exclusion only for Falcon in the current AV solution"
    ],
    correctAnswer: "Create an exclusion only for Falcon in the current AV solution",
    explanation: "During interim coexistence, the recommended step after initial testing is to exclude Falcon's own processes/paths within the other AV solution (not the reverse), reducing conflicts and duplicate scanning while both solutions run side by side.",
    sourceReference: "Practice dump (unverified against official docs)"
  },
  {
    id: 2004,
    type: "single",
    examDomain: "Host Management and Setup",
    difficulty: "easy",
    confidence: "high",
    question: "Where can you find the sensor version for a specific endpoint?",
    options: ["Sensor downloads", "Host groups", "Sensor coverage lookup", "Host Management"],
    correctAnswer: "Host Management",
    explanation: "Host Management lists each individual host along with its current sensor version. Sensor downloads shows available versions to install, not what's running on a specific host.",
    sourceReference: "Practice dump"
  },
  {
    id: 2005,
    type: "single",
    examDomain: "Rules Configuration",
    difficulty: "medium",
    confidence: "high",
    question: "What type of exclusion should be used with caution as it may include syntax that could introduce additional security risks such as malware or other attacks which would not be recorded, detected, or prevented?",
    options: ["IOA Exclusions", "Sensor Visibility Exclusion", "IOC Exclusions", "Machine Learning Exclusions"],
    correctAnswer: "Sensor Visibility Exclusion",
    explanation: "A Sensor Visibility Exclusion (SVE) makes a path fully invisible to the sensor - nothing in that path is recorded, detected, or prevented, so any malware placed there would go completely unnoticed. This is a much broader risk than the other, more targeted exclusion types.",
    sourceReference: "Practice dump"
  },
  {
    id: 2006,
    type: "single",
    examDomain: "Rules Configuration",
    difficulty: "medium",
    confidence: "high",
    question: "To enhance your security, you want to detect (but not block) on a list of IP addresses. How can you use IOC management to accomplish this?",
    options: [
      "Import the list of IP addresses and set the action to Detect Only",
      "Import the list of IP addresses and set the action to No Action",
      "Import the list of IP addresses and set the action to Prevent/Block",
      "Import the list of IP addresses and set the action to Allow"
    ],
    correctAnswer: "Import the list of IP addresses and set the action to Detect Only",
    explanation: "Detect Only generates alerts on matches without blocking traffic, which matches the requirement to detect without preventing.",
    sourceReference: "Practice dump"
  },
  {
    id: 2007,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "medium",
    question: "What is the most efficient sequence of steps to delete a sensor update policy?",
    options: [
      "From the policy's settings, disable all toggles first, then click Delete",
      "Remove the policy from all assigned host groups, then click Delete from the policy's settings",
      "Remove the policy from all assigned host groups, disable the policy, then click Delete from the policy's settings",
      "From the policy's settings, disable the policy, then click Delete"
    ],
    correctAnswer: "Remove the policy from all assigned host groups, then click Delete from the policy's settings",
    explanation: "A policy still assigned to a host group typically cannot be deleted. The most efficient path is to unassign it from all host groups, then delete directly - no need for the extra disable step.",
    sourceReference: "Practice dump (unverified against official docs)"
  },
  {
    id: 2008,
    type: "single",
    examDomain: "Rules Configuration",
    difficulty: "hard",
    confidence: "high",
    question: "When creating a custom IOA for a specific domain, which regex syntax would be best for detecting or preventing on all subdomains as well?",
    options: [
      "**baddomain\\.xyz|baddomain\\.xyz**",
      ".*baddomain.xyz",
      ".*\\.baddomain\\.xyz|baddomain\\.xyz",
      ".*.\\.baddomain\\.xyz"
    ],
    correctAnswer: ".*\\.baddomain\\.xyz|baddomain\\.xyz",
    explanation: "This pattern matches any subdomain via '.*\\.baddomain\\.xyz' (any characters followed by a literal dot and the domain) OR the bare domain itself via the second alternative, covering both cases.",
    sourceReference: "Practice dump"
  },
  {
    id: 2009,
    type: "single",
    examDomain: "Policy Application",
    difficulty: "medium",
    confidence: "medium",
    question: "You have a set of hosts in their own group that should not be accessed via Real Time Response (RTR). What action will disable RTR on these hosts?",
    options: [
      "Apply a top precedence policy with the RTR access turned off to the host group",
      "Create a new Response Policy and add the host name to the exceptions list under Real Time Functionality",
      "Edit the Default RTR Policy to exclude the host group",
      "Edit the Default Response Policy, toggle the RTR switch off, and assign the policy to the host group"
    ],
    correctAnswer: "Apply a top precedence policy with the RTR access turned off to the host group",
    explanation: "A dedicated policy with RTR disabled, set to top precedence and assigned to that host group, ensures it overrides any other response policy that might otherwise apply.",
    sourceReference: "Practice dump (unverified against official docs)"
  },
  {
    id: 2010,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "high",
    question: "You want to install the Falcon sensor on a host specifically using Red Hat Enterprise Linux that has installation tokens enabled. Which command should you use?",
    options: [
      "sudo zypper /opt/CrowdStrike/falconctl -s --CID=<CID> --prov-token=ABCD1234",
      "sudo /opt/CrowdStrike/falconctl -s -t ABCD1234",
      "sudo /opt/CrowdStrike/falconctl -s --cid=<CID> --provisioning-token=ABCD1234",
      "sudo yum install <installer_filename>"
    ],
    correctAnswer: "sudo /opt/CrowdStrike/falconctl -s --cid=<CID> --provisioning-token=ABCD1234",
    explanation: "falconctl uses lowercase flags: --cid and --provisioning-token. The zypper option is for SUSE, not RHEL, and uses incorrect flag names.",
    sourceReference: "Practice dump"
  },
  {
    id: 2011,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "medium-high",
    question: "A member of your SecOps team currently has the role of Falcon Security Lead and is able to manage detections, quarantine files, and reset user credentials. Which additional default role is required to allow them to also manage sensor deployment and maintain sensor configuration and update policies?",
    options: ["Remediation Manager", "Detections Exception Manager", "Desktop Support Analyst", "Endpoint Manager"],
    correctAnswer: "Endpoint Manager",
    explanation: "Endpoint Manager is the default role scoped to sensor deployment, configuration, and update policy management - a distinct scope from Falcon Security Lead's detection/credential focus.",
    sourceReference: "Practice dump"
  },
  {
    id: 2012,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "high",
    question: "You are troubleshooting a host that is showing 'Changes Pending' under the Sensor Update policy within Host Management. What is the first step you should take?",
    options: [
      "Verify the host is online",
      "Generate a CSWinDiag and review the logs",
      "Verify allowlists for the appropriate FQDN/IP Addresses",
      "Uninstall and reinstall the sensor"
    ],
    correctAnswer: "Verify the host is online",
    explanation: "A policy change only applies once the host checks in with the cloud. If the host is offline, the status will show 'Changes Pending' indefinitely - checking connectivity is the logical first troubleshooting step before deeper diagnostics.",
    sourceReference: "Practice dump"
  },
  {
    id: 2013,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "high",
    question: "What controls the rate at which your sensors will receive automatic sensor updates?",
    options: ["Sensor update policy", "Maintenance tokens", "Sensor update throttling", "Channel file update throttling"],
    correctAnswer: "Sensor update throttling",
    explanation: "Sensor Update Throttling limits how many sensors download a new version per hour, preventing network congestion from simultaneous mass updates. This is configured within the Sensor Update Policy for each platform.",
    sourceReference: "Verified via pass4success.com (matches official CCFA-200b practice question with revealed answer)"
  },
  {
    id: 2014,
    type: "single",
    examDomain: "Dashboards and Reports",
    difficulty: "medium",
    confidence: "medium",
    question: "You are the Falcon Administrator for your organization, and you suspect one of your users disabled your custom Windows sensor update policy. Which of the audit logs would confirm or deny your suspicion?",
    options: ["Falcon UI (Audit Trail)", "RTR Audit Log", "Prevention policy debug", "Sensor visibility exclusions"],
    correctAnswer: "Falcon UI (Audit Trail)",
    explanation: "The general Falcon UI audit trail tracks configuration changes across the console, including policy toggles - this is the correct place to confirm whether and by whom a policy was disabled.",
    sourceReference: "Practice dump (unverified against official docs)"
  },
  {
    id: 2015,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "high",
    question: "What is a valid step when troubleshooting a sensor installation failure?",
    options: [
      "Delete any available application crash log files",
      "Disable SSL and TLS on the host",
      "Reinstall with VDI=1 and NO_START=1 parameters",
      "Confirm all required services are running on the system"
    ],
    correctAnswer: "Confirm all required services are running on the system",
    explanation: "Missing or disabled required Windows services (such as LMHosts, NSI, BFE, or Windows Power Service) are a documented cause of installation failure, so confirming they're running is a valid and necessary troubleshooting step.",
    sourceReference: "Consistent with Falcon Sensor Pre-Installation Requirements"
  },
  {
    id: 2016,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "medium",
    question: "You have been asked to collect the sensor diagnostics logs for an online Windows host in a remote office to troubleshoot an application compatibility issue. Which procedure should you use?",
    options: [
      "Use Real Time Response to execute CSWINDIAG and then collect the CSWINDIAG logs from the host",
      "On the Host Management page, select the host, then click Collect Diagnostics",
      "Have the end user run the falcon_sensor --collect-logs command",
      "Use Microsoft Remote Desktop to collect the Falcon Sensor logs from the %SYSTEMROOT%\\Temp folder"
    ],
    correctAnswer: "On the Host Management page, select the host, then click Collect Diagnostics",
    explanation: "Modern Falcon consoles support a direct 'Collect Diagnostics' action from Host Management for online hosts, avoiding a manual RTR session for this routine task.",
    sourceReference: "Practice dump (unverified against official docs - depends on platform version)"
  },
  {
    id: 2017,
    type: "single",
    examDomain: "Group Creation",
    difficulty: "medium",
    confidence: "high",
    question: "You must create a host group for Windows 11 Workstations that will be easy to maintain. There are no existing Windows 11 hosts in your environment. What is the correct sequence of steps to accomplish this?",
    options: [
      "Clone an existing host group; edit the Assignment Rule to add OS Version - Windows 11; save the host group",
      "Add a New Host Group, Type Static; edit the Assignment Rule using the filter Platform, Windows; save the host group",
      "Add a New Host Group, Type Dynamic; edit the Assignment Rule using the filter OS Version; set it to Windows 11; save the host group",
      "Add a New Host Group, Type Static; manually add each Windows 11 host as it's provisioned; save the host group"
    ],
    correctAnswer: "Add a New Host Group, Type Dynamic; edit the Assignment Rule using the filter OS Version; set it to Windows 11; save the host group",
    explanation: "A Dynamic host group automatically captures future hosts matching the assignment rule (OS Version = Windows 11), which is essential here since no Windows 11 hosts exist yet and the group needs to stay low-maintenance as new ones are added.",
    sourceReference: "Practice dump"
  },
  {
    id: 2018,
    type: "single",
    examDomain: "Dashboards and Reports",
    difficulty: "medium",
    confidence: "medium",
    question: "An organization is undergoing an internal security review. Which report can be used to view records related to the creation of API client and secret pairs?",
    options: ["API Audit Trail", "Falcon RTR Audit Log", "API Clients and Keys", "Falcon UI Audit Log"],
    correctAnswer: "Falcon UI Audit Log",
    explanation: "The API Audit Trail tracks the usage of API calls made with existing clients, not the administrative act of creating a client/secret pair. That creation event is captured in the general Falcon UI audit log.",
    sourceReference: "Practice dump (unverified against official docs - genuinely ambiguous between these two logs)"
  },
  {
    id: 2019,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "hard",
    confidence: "medium",
    question: "The Falcon Sensor was installed on a Virtual Machine template using the installation parameter NO_START=1. After installation, the Virtual Machine template is rebooted. What is the effect on the Falcon Sensor after reboot?",
    options: [
      "The Falcon Sensor will start at reboot with the same Agent ID",
      "The Falcon Sensor will not start until you set an Agent ID",
      "The Falcon Sensor will start at reboot and generate a new Agent ID",
      "The Falcon Sensor will remain permanently disabled until manually started"
    ],
    correctAnswer: "The Falcon Sensor will start at reboot with the same Agent ID",
    explanation: "NO_START=1 only prevents the sensor from starting immediately after installation completes; the service is still set to start automatically on subsequent boots. Since the Agent ID was never cleared, it starts with the same AID - which is why golden-image workflows require an explicit AID-clearing step before capturing the image.",
    sourceReference: "Practice dump (technical nuance, moderate confidence)"
  },
  {
    id: 2020,
    type: "single",
    examDomain: "Workflows",
    difficulty: "medium",
    confidence: "medium",
    question: "You are writing a new Fusion SOAR workflow to remediate new detections of malware. Which Fusion SOAR workflow trigger will accomplish this?",
    options: ["New Case Trigger", "Alert - EPP Detection Trigger", "Hourly Scheduled Trigger", "Audit - New Detection Trigger"],
    correctAnswer: "Alert - EPP Detection Trigger",
    explanation: "An EPP (Endpoint Protection Platform) detection alert trigger fires specifically when a new malware/detection alert is generated, which is exactly the event this remediation workflow needs to respond to.",
    sourceReference: "Practice dump (exam-specific trigger naming, unverified against official docs)"
  },
  {
    id: 2021,
    type: "single",
    examDomain: "Rules Configuration",
    difficulty: "medium",
    confidence: "high",
    question: "What action allows you to prevent a trusted file path from being uploaded to the CrowdStrike Cloud without disabling uploads globally?",
    options: ["An IOA exclusion", "A Sensor Visibility exclusion", "A Custom IOC entry", "A machine-learning exclusion"],
    correctAnswer: "A Sensor Visibility exclusion",
    explanation: "Sensor Visibility Exclusions also affect sample/file upload behavior for the excluded path, letting you scope the change to that specific path instead of disabling uploads platform-wide.",
    sourceReference: "Practice dump"
  },
  {
    id: 2022,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "hard",
    confidence: "medium",
    question: "You need to set up a group to test the newest sensor version before wider rollout. Which sensor update policy configuration should you apply to this test group before adding hosts to it?",
    options: [
      "Assign the Auto: N-2 sensor update policy, and ensure it has the highest precedence for all OS platforms",
      "Manually assign the latest version to each host, and ensure that policy has the lowest precedence for all OS platforms",
      "Assign the Auto: Latest sensor update policy, and ensure it has the highest precedence for all OS platforms",
      "Assign the Auto: N-1 sensor update policy, and ensure it has the lowest precedence for all OS platforms"
    ],
    correctAnswer: "Assign the Auto: Latest sensor update policy, and ensure it has the highest precedence for all OS platforms",
    explanation: "Auto: Latest always tracks the newest released sensor version, which is what a pilot/test group for the newest version needs. It must also be set to the highest precedence so it actually takes effect over any other policy that might otherwise apply to those hosts.",
    sourceReference: "Practice dump"
  },
  {
    id: 2023,
    type: "single",
    examDomain: "User Management",
    difficulty: "easy",
    confidence: "high",
    question: "Which action is available for an existing API Client in Falcon?",
    options: ["Delete an API Client", "Retrieve an API Client Secret", "Copy an API Client", "Show an API Client Secret"],
    correctAnswer: "Delete an API Client",
    explanation: "Available actions for an existing API Client are Edit, Reset Secret, and Delete. The secret itself is shown only once at creation and can never be retrieved or re-shown afterward - only reset to a new value.",
    sourceReference: "Confirmed consistent with earlier established fact"
  },
  {
    id: 2024,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "medium",
    question: "What least-privilege role would be utilized to extract a quarantined file as a password-protected .zip?",
    options: ["Falcon Analyst", "Falcon Administrator", "Falcon Security Lead", "Quarantine Manager"],
    correctAnswer: "Falcon Security Lead",
    explanation: "Falcon Security Lead's scope explicitly includes managing detections and quarantined files, making it the least-privilege role (versus the broader Falcon Administrator) that still covers this task. 'Quarantine Manager' is not a standard default Falcon role.",
    sourceReference: "Practice dump (unverified against official docs)"
  },
  {
    id: 2025,
    type: "single",
    examDomain: "Rules Configuration",
    difficulty: "medium",
    confidence: "high",
    question: "False positive detections are being generated by a single binary application provided by a business vendor, running on multiple endpoints. How should the false positives be managed?",
    options: [
      "Using Custom IOA rule groups, add the binary application to the applicable rule group and add the rule group to the appropriate prevention policy",
      "Using IOC Management, add the SHA-256 hash of the binary application and set the action to Block, hide detection",
      "Using Custom IOA rule groups, add the binary application to the applicable rule group and assign it to a host group that uses the application",
      "Using IOC Management, add the SHA-256 hash of the binary application and set the action to Allow"
    ],
    correctAnswer: "Using IOC Management, add the SHA-256 hash of the binary application and set the action to Allow",
    explanation: "A hash-based IOC with action Allow is the direct, targeted way to stop false positives for one specific known-good binary across all endpoints where it runs.",
    sourceReference: "Practice dump"
  },
  {
    id: 2026,
    type: "single",
    examDomain: "Host Management and Setup",
    difficulty: "easy",
    confidence: "medium",
    question: "Where can you find hosts that have been offline for ten minutes or longer?",
    options: ["Host Management", "Sensor Coverage Dashboard", "Host Groups", "Activity Dashboard"],
    correctAnswer: "Host Management",
    explanation: "Host Management shows each host's last-seen/online status, which can be filtered or sorted to surface hosts that have gone offline within a given window.",
    sourceReference: "Practice dump (options appeared truncated in source material)"
  },
  {
    id: 2027,
    type: "single",
    examDomain: "Policy Application",
    difficulty: "medium",
    confidence: "high",
    question: "In order to quarantine files on the host, what prevention policy settings must be enabled?",
    options: [
      "Malware Protection and Windows Anti-Malware Execution Blocking",
      "Next-Gen Antivirus Prevention sliders and 'Quarantine & Security Center Registration'",
      "Malware Protection and Custom Execution Blocking",
      "Behavior-Based Threat Prevention sliders and Advanced Remediation Actions"
    ],
    correctAnswer: "Next-Gen Antivirus Prevention sliders and 'Quarantine & Security Center Registration'",
    explanation: "Quarantine functionality requires the NGAV prevention sliders to be active along with the specific 'Quarantine & Security Center Registration' toggle enabled in the prevention policy.",
    sourceReference: "Practice dump"
  },
  {
    id: 2028,
    type: "single",
    examDomain: "Group Creation",
    difficulty: "medium",
    confidence: "high",
    question: "You are tasked with creating a 'Workstations' host group to encompass all workstations in your environment. Which dynamic grouping criteria will most efficiently accomplish this task?",
    options: ["OU: Workstation", "Grouping Tags: Workstation", "Type: Workstation", "Platform: Windows"],
    correctAnswer: "Type: Workstation",
    explanation: "The 'Type' filter directly distinguishes Workstation from Server/Domain Controller, making it the most precise and efficient criterion - unlike Platform (which would also include servers) or OU/Tags (which require additional manual setup to be reliable).",
    sourceReference: "Practice dump"
  },
  {
    id: 2029,
    type: "single",
    examDomain: "Policy Application",
    difficulty: "medium",
    confidence: "high",
    question: "During a Windows system investigation via Real Time Response, an RTR Active Responder is unable to execute a custom PowerShell script for finding specific system artifacts. What is likely restricting the responder from executing the script?",
    options: [
      "Put-and-Run is not enabled in the response policy",
      "Custom Scripts is not enabled in the response policy",
      "Script-Based Execution Monitoring is not enabled in the prevention policy",
      "The responder requires the RTR Administrator role"
    ],
    correctAnswer: "Custom Scripts is not enabled in the response policy",
    explanation: "The 'Custom Scripts' toggle in the RTR response policy specifically governs whether custom (non-built-in) scripts can be executed, separate from basic RTR access.",
    sourceReference: "Practice dump"
  },
  {
    id: 2030,
    type: "single",
    examDomain: "Workflows",
    difficulty: "medium",
    confidence: "high",
    question: "Your incident responder team is migrating existing workflows into Fusion SOAR workflows so that they execute natively in Falcon. The workflow imports are failing. What format must the workflows be in to successfully import them into Fusion SOAR?",
    options: ["YAML", "CSV", "SOAR", "JSON"],
    correctAnswer: "JSON",
    explanation: "Fusion SOAR workflow import/export uses JSON format - consistent with the JSON schema builder used elsewhere in Fusion SOAR for defining structured workflow inputs.",
    sourceReference: "Practice dump"
  },
  {
    id: 2031,
    type: "single",
    examDomain: "Host Management and Setup",
    difficulty: "medium",
    confidence: "high",
    question: "Where can you find a list of hosts that have not communicated with the CrowdStrike Cloud?",
    options: ["Host Groups", "Inactive Sensors", "Activity Dashboard", "Sensor Report"],
    correctAnswer: "Inactive Sensors",
    explanation: "The Inactive Sensors view specifically surfaces hosts that have stopped checking in with the CrowdStrike cloud.",
    sourceReference: "Practice dump"
  },
  {
    id: 2032,
    type: "single",
    examDomain: "Policy Application",
    difficulty: "medium",
    confidence: "high",
    question: "In addition to Host Groups, what other type of group can a prevention policy be applied to?",
    options: ["Operating System Groups", "Machine Learning Groups", "Custom IOA Rule Groups", "Custom IOC Groups"],
    correctAnswer: "Custom IOA Rule Groups",
    explanation: "A prevention policy has two alignment options: Host Groups and Custom IOA Rule Groups. The other listed options are not real Falcon grouping types for this purpose.",
    sourceReference: "Consistent with earlier confirmed fact from the same dump family"
  },
  {
    id: 2033,
    type: "single",
    examDomain: "Host Management and Setup",
    difficulty: "medium",
    confidence: "high",
    question: "An inactive host that does not contact the Falcon cloud will be automatically removed from the Host Management and Trash pages after how many days?",
    options: ["75 Days", "60 Days", "90 Days", "45 Days"],
    correctAnswer: "90 Days",
    explanation: "A host is considered inactive after roughly 7 days without contacting the cloud and moves to the Trash page. If it still hasn't reconnected after 90 days total, it is permanently deleted from the Falcon platform. (Correction: an earlier answer in this conversation incorrectly stated 45 days - that figure applies to a different, unrelated feature.)",
    sourceReference: "Verified via pass4success.com (matches official CCFA-200b practice question with revealed answer and explanation)"
  },
  {
    id: 2034,
    type: "single",
    examDomain: "Policy Application",
    difficulty: "medium",
    confidence: "high",
    question: "What prevention policy setting prevents sensor-related files, folders, and registry objects from being renamed or deleted?",
    options: ["Host Modification Protection", "System Configuration Protection", "Sensor Tampering Protection", "Sensor Modification Protection"],
    correctAnswer: "Sensor Tampering Protection",
    explanation: "Sensor Tampering Protection specifically blocks attempts to rename, delete, or otherwise modify the sensor's own files, folders, and registry entries.",
    sourceReference: "Practice dump"
  },
  {
    id: 2035,
    type: "single",
    examDomain: "Host Management and Setup",
    difficulty: "medium",
    confidence: "high",
    question: "What happens to detections in the console after clicking 'Disable Detections' for a host from within the Host Management page?",
    options: [
      "All detection data for the host is deleted and the host is hidden from view",
      "Existing detections for the host remain, but no new ones will display",
      "New detections are disabled for 30 days only",
      "The detections for the host are removed from the console immediately"
    ],
    correctAnswer: "The detections for the host are removed from the console immediately",
    explanation: "Disabling detections for a host removes its existing detection records from the console immediately and stops any new detections from appearing until detections are re-enabled.",
    sourceReference: "Confirmed consistent with earlier established fact from a related dump"
  },
  {
    id: 2036,
    type: "single",
    examDomain: "Host Management and Setup",
    difficulty: "medium",
    confidence: "high",
    question: "Detections related to a penetration test on a particular server are currently generating thousands of entries in the console. Your leadership does not need to track these detections in Falcon. What should you do to allow your team to focus on more relevant detections?",
    options: [
      "Delete the detections in the console and contain the server undergoing the test",
      "Temporarily disable detections for the server in Host Management, and re-enable after the test is done",
      "Create a Fusion Workflow to email the SOC team every time the penetration test generates a detection",
      "Permanently disable detections for the server in Host Management"
    ],
    correctAnswer: "Temporarily disable detections for the server in Host Management, and re-enable after the test is done",
    explanation: "This is the most reversible, proportionate response - it clears the noise during the test without permanently losing visibility on that server or creating unnecessary automation overhead.",
    sourceReference: "Practice dump"
  },
  {
    id: 2037,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "hard",
    confidence: "low",
    question: "You are attempting to install the Falcon sensor on a host with a slow internet connection, and the installation fails after 20 minutes. What parameter can be used to override the 20-minute default provisioning window?",
    options: ["Timeout=30", "ProvNoWait=1", "Timeout=0", "DelayedStart=1"],
    correctAnswer: "ProvNoWait=1",
    explanation: "This is the best-fit answer among the given options, but flagged as low confidence: official CrowdStrike documentation typically references a provisioning wait time parameter with different exact naming than any of these four choices. Verify against the current official installation guide for your sensor version before relying on this.",
    sourceReference: "Practice dump - LOW CONFIDENCE, recommend verifying against official docs"
  },
  {
    id: 2038,
    type: "single",
    examDomain: "Rules Configuration",
    difficulty: "medium",
    confidence: "high",
    question: "You have 100 hashes that have been prohibited by management and need to be blocked within your organization. Using Falcon, what is the best way to accomplish this?",
    options: [
      "Navigate to Configure > IOC Management. Add a custom IOC. Add the list of hashes. Set the action to Block. Verify the prevention policy includes Custom Blocking under Execution Blocking.",
      "Navigate to Configure > Prevention Policies. Add an IOC Policy. Add the list of hashes as a CSV file. Set the action to Block. Verify Custom Execution Blocking is active.",
      "Navigate to Configure > IOC Management. Add a custom Prevention Policy. Add the list of hashes. Set the action to Block. Verify the policy includes Custom Execution Blocking.",
      "Navigate to Configure > Prevention Policies. Add an IOC Policy. Add the list of hashes as a CSV file. Set the action to Block and Alert. Verify Custom Blocking inside Execution Blocking is active."
    ],
    correctAnswer: "Navigate to Configure > IOC Management. Add a custom IOC. Add the list of hashes. Set the action to Block. Verify the prevention policy includes Custom Blocking under Execution Blocking.",
    explanation: "IOC Management (not Prevention Policies) is where hash-based IOCs are added and their action set. The prevention policy must separately have Custom Blocking under Execution Blocking enabled for the block to actually take effect.",
    sourceReference: "Practice dump"
  },
  {
    id: 2039,
    type: "single",
    examDomain: "Dashboards and Reports",
    difficulty: "medium",
    confidence: "medium",
    question: "Which report in Falcon can be used to determine the volume of blocked activity at a different (hypothetical) prevention policy setting?",
    options: ["Falcon Prevention Policy Debug", "Machine Learning Prevention Monitoring", "Prevention Policy Audit Trail"],
    correctAnswer: "Machine Learning Prevention Monitoring",
    explanation: "This report lets you see what would have been blocked under different ML prevention slider settings, which is exactly the 'what-if at a different setting' analysis this question describes.",
    sourceReference: "Practice dump"
  },
  {
    id: 2040,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "medium",
    question: "Which default user role will allow you to see all analyst Real Time Response session details?",
    options: ["Falcon Security Lead", "Real Time Response - Read-Only Analyst", "Falcon Administrator", "Real Time Response - Administrator"],
    correctAnswer: "Real Time Response - Administrator",
    explanation: "The RTR Administrator role has the broadest visibility into RTR activity, including session details across analysts, beyond what the Read-Only Analyst role provides for their own sessions.",
    sourceReference: "Practice dump (unverified against official docs)"
  },

  {
    id: 2101,
    type: "single",
    examDomain: "User Management",
    difficulty: "easy",
    confidence: "high",
    question: "What is the primary function of the Falcon Analyst - Read Only role?",
    options: [
      "Full console access with detection management capabilities",
      "View-only access to detections and data without the ability to take remediation actions",
      "Manage only Real Time Response sessions",
      "Configure prevention policies only"
    ],
    correctAnswer: "View-only access to detections and data without the ability to take remediation actions",
    explanation: "Read-Only variants of Falcon roles consistently follow this pattern: full visibility into data, but no ability to change configuration or take remediation action.",
    sourceReference: "General CrowdStrike RBAC pattern"
  },
  {
    id: 2102,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "medium-high",
    question: "Which role is best suited for a helpdesk technician who needs to view basic host information and assist end users, but should not modify prevention policies or manage other users?",
    options: ["Falcon Administrator", "Desktop Support Analyst", "Falcon Security Lead", "Endpoint Manager"],
    correctAnswer: "Desktop Support Analyst",
    explanation: "Desktop Support Analyst is scoped for frontline helpdesk-style tasks - enough visibility to assist end users, without policy or user-management permissions.",
    sourceReference: "Referenced in practice dump role list"
  },
  {
    id: 2103,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "high",
    question: "According to least-privilege best practice, what should be done when assigning roles to new Falcon console users?",
    options: [
      "Assign Falcon Administrator to all users to avoid future permission issues",
      "Assign only the roles needed for that user's specific job function",
      "Assign every available role so users are never blocked from a task",
      "Leave new users without any role until they request access"
    ],
    correctAnswer: "Assign only the roles needed for that user's specific job function",
    explanation: "Least privilege means granting the minimum access necessary for someone's job - avoiding both under- and over-provisioning.",
    sourceReference: "General security best practice"
  },
  {
    id: 2104,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "high",
    question: "Once an API Client Secret has been generated in Falcon, what happens if you navigate away without copying it?",
    options: [
      "You can retrieve it anytime from API Clients and Keys",
      "It can only be retrieved by contacting CrowdStrike Support",
      "The secret cannot be retrieved again; you must reset it to generate a new one",
      "It is automatically emailed to the account administrator"
    ],
    correctAnswer: "The secret cannot be retrieved again; you must reset it to generate a new one",
    explanation: "API Client Secrets are shown only once, at creation time, for security reasons. If lost, resetting the secret is the only way to get a new usable value.",
    sourceReference: "Confirmed consistent with earlier established fact"
  },
  {
    id: 2105,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "medium",
    question: "Which of the following is a valid default Falcon user role focused specifically on managing quarantined files and remediation actions across hosts?",
    options: ["Remediation Manager", "Prevention Hashes Manager", "Falcon Investigator", "Event Viewer"],
    correctAnswer: "Remediation Manager",
    explanation: "Remediation Manager is scoped around taking remediation action (such as managing quarantined files) rather than investigation, hash management, or read-only viewing.",
    sourceReference: "General CrowdStrike default role naming"
  },
  {
    id: 2106,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "medium",
    question: "A user needs to create and manage Custom IOA rules and detection exclusions, but should not be able to manage other users or sensor deployment. Which role best fits this need?",
    options: ["Falcon Administrator", "Detections Exceptions Manager", "Endpoint Manager", "Falcon Security Lead"],
    correctAnswer: "Detections Exceptions Manager",
    explanation: "This role's scope centers on detection exceptions and rule tuning, which matches the described need without granting broader admin or sensor-deployment permissions.",
    sourceReference: "General CrowdStrike default role naming"
  },
  {
    id: 2107,
    type: "single",
    examDomain: "User Management",
    difficulty: "easy",
    confidence: "high",
    question: "Which statement about Falcon user roles is correct?",
    options: [
      "A user can only be assigned exactly one role at a time",
      "A user can be assigned multiple roles simultaneously to combine permissions",
      "Roles can only be assigned by CrowdStrike Support",
      "Roles automatically expire after 90 days"
    ],
    correctAnswer: "A user can be assigned multiple roles simultaneously to combine permissions",
    explanation: "Falcon's RBAC model allows a single user to hold multiple roles at once, with their effective permissions being the combination of all assigned roles.",
    sourceReference: "Confirmed via CrowdStrike Developer Center documentation (Role-Based Access Control)"
  },
  {
    id: 2108,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "high",
    question: "Which role would allow a security team member to execute active Real Time Response commands (such as file retrieval and process termination) on a host, rather than only viewing RTR session data?",
    options: ["Real Time Response - Read Only Analyst", "Real Time Responder - Active Responder", "Falcon Analyst", "Desktop Support Analyst"],
    correctAnswer: "Real Time Responder - Active Responder",
    explanation: "The 'Active Responder' tier is specifically for executing RTR commands, as opposed to the Read-Only tier which can only view session data.",
    sourceReference: "Established RTR role tiering pattern"
  },
  {
    id: 2109,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "high",
    question: "Which role is limited to viewing Real Time Response session details and history without the ability to initiate or execute RTR commands?",
    options: ["Real Time Response - Read-Only Analyst", "Real Time Responder - Active Responder", "Real Time Response - Administrator", "Endpoint Manager"],
    correctAnswer: "Real Time Response - Read-Only Analyst",
    explanation: "This role name directly indicates its scope: read-only visibility into RTR sessions, with no command execution ability.",
    sourceReference: "Established RTR role tiering pattern"
  },
  {
    id: 2110,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "high",
    question: "What is the most appropriate way to manage a departing employee's Falcon console access?",
    options: [
      "Change their password and leave the account active in case they return",
      "Immediately remove or deactivate their user account and any associated API client credentials",
      "Downgrade them to Falcon Analyst - Read Only and take no further action",
      "Wait 90 days before taking any action"
    ],
    correctAnswer: "Immediately remove or deactivate their user account and any associated API client credentials",
    explanation: "Standard offboarding security practice requires prompt removal of both console access and any API credentials tied to that person, closing the access window immediately rather than leaving a lingering account.",
    sourceReference: "General security best practice"
  },
  {
    id: 2111,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "high",
    question: "Which of these is NOT an available action for managing an existing API Client in Falcon?",
    options: ["Edit an API Client", "Reset an API Client Secret", "Retrieve an API Client Secret", "Delete an API Client"],
    correctAnswer: "Retrieve an API Client Secret",
    explanation: "The secret is only ever displayed once, at creation. It cannot be retrieved or re-shown afterward - the only recourse if lost is to reset it, generating a brand-new secret.",
    sourceReference: "Confirmed consistent with earlier established fact"
  },
  {
    id: 2112,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "medium-high",
    question: "A regional office needs someone who can manage sensor deployment and update policies for their local hosts, but should not have access to detection management or user administration. Which role fits this need?",
    options: ["Falcon Security Lead", "Endpoint Manager", "Falcon Administrator", "Remediation Manager"],
    correctAnswer: "Endpoint Manager",
    explanation: "Endpoint Manager's scope is sensor deployment and update policy management, distinct from the detection-focused Security Lead or the fully privileged Administrator role.",
    sourceReference: "Referenced in practice dump role list"
  },
  {
    id: 2113,
    type: "single",
    examDomain: "User Management",
    difficulty: "easy",
    confidence: "high",
    question: "Which role has the broadest administrative access across the entire Falcon console, including user management, policy configuration, and API client management?",
    options: ["Falcon Security Lead", "Falcon Administrator", "Falcon Analyst", "Endpoint Manager"],
    correctAnswer: "Falcon Administrator",
    explanation: "Falcon Administrator is the top-level default role with the broadest access across the console, which is exactly why best practice recommends limiting how many accounts hold it.",
    sourceReference: "General CrowdStrike RBAC pattern"
  },
  {
    id: 2114,
    type: "single",
    examDomain: "User Management",
    difficulty: "medium",
    confidence: "high",
    question: "What CrowdStrike-recommended practice helps reduce the risk of a single compromised or departed administrator account disrupting Falcon operations?",
    options: [
      "Sharing one administrator account among the whole team for consistency",
      "Maintaining at least two Falcon Administrator accounts",
      "Disabling the Falcon Administrator role entirely",
      "Using only API keys instead of user accounts"
    ],
    correctAnswer: "Maintaining at least two Falcon Administrator accounts",
    explanation: "This matches the explicit guidance to never rely on a single administrator account and to establish at least two Falcon Administrators as part of implementation planning.",
    sourceReference: "Consistent with Falcon Platform Architecture training material"
  },
  {
    id: 2115,
    type: "single",
    examDomain: "User Management",
    difficulty: "easy",
    confidence: "high",
    question: "An organization wants to periodically verify that user roles still match employees' current job responsibilities. What practice does this describe?",
    options: ["Threat hunting", "Periodic access/role review (least-privilege audit)", "Sensor compatibility assessment", "Coverage gap analysis"],
    correctAnswer: "Periodic access/role review (least-privilege audit)",
    explanation: "Regularly reviewing and adjusting user roles to match current responsibilities - removing access that's no longer needed - is a core least-privilege maintenance practice.",
    sourceReference: "General security best practice"
  },

  {
    id: 2201,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "medium",
    question: "What is the key functional difference between a 'streaming' sensor installer and a standard full installer package?",
    options: [
      "Streaming installers require no internet connection at all",
      "Streaming installers download the sensor package from the cloud during installation rather than including it locally",
      "Streaming installers only work on Linux",
      "Streaming installers cannot use installation tokens"
    ],
    correctAnswer: "Streaming installers download the sensor package from the cloud during installation rather than including it locally",
    explanation: "A streaming installer is a small bootstrapper that pulls the actual sensor package from the cloud during setup, versus a full installer that bundles everything needed offline.",
    sourceReference: "General CrowdStrike deployment concept"
  },
  {
    id: 2202,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "high",
    question: "What is the purpose of a maintenance token in Falcon sensor management?",
    options: [
      "It allows a sensor to receive automatic feature updates faster",
      "It is required to uninstall or reinstall a Falcon sensor when uninstall/maintenance protection is enabled",
      "It grants API access to the Falcon console",
      "It extends the sensor's provisioning window"
    ],
    correctAnswer: "It is required to uninstall or reinstall a Falcon sensor when uninstall/maintenance protection is enabled",
    explanation: "Maintenance tokens act as a safeguard: when uninstall/maintenance protection is on, a valid token must be supplied before the sensor can be uninstalled or certain maintenance actions performed, preventing unauthorized tampering.",
    sourceReference: "General CrowdStrike sensor protection concept"
  },
  {
    id: 2203,
    type: "single",
    examDomain: "Policy Application",
    difficulty: "medium",
    confidence: "medium",
    question: "Which prevention policy setting, when enabled, requires a maintenance token before the Falcon sensor can be uninstalled from a host?",
    options: ["Sensor Tampering Protection", "Uninstall and Maintenance Protection", "Host Modification Protection", "Custom Execution Blocking"],
    correctAnswer: "Uninstall and Maintenance Protection",
    explanation: "This setting is distinct from Sensor Tampering Protection (which guards files/folders/registry from modification) - it specifically gates the uninstall/maintenance action itself behind a token requirement.",
    sourceReference: "General CrowdStrike sensor protection concept"
  },
  {
    id: 2204,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "medium-high",
    question: "When deploying the Falcon sensor to a host using an installation token, what is the purpose of the token?",
    options: [
      "It encrypts sensor telemetry in transit",
      "It authorizes and associates the sensor installation with the correct CID without requiring separate CID entry each time",
      "It automatically sets the sensor update policy for that host",
      "It grants Real Time Response permissions to the installer"
    ],
    correctAnswer: "It authorizes and associates the sensor installation with the correct CID without requiring separate CID entry each time",
    explanation: "Installation tokens are an authorization/provisioning mechanism tied to the CID, streamlining and controlling how new sensors are allowed to join the organization's environment.",
    sourceReference: "General CrowdStrike deployment concept"
  },
  {
    id: 2205,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "hard",
    confidence: "medium-high",
    question: "A newly imaged batch of Windows hosts all show the exact same Agent ID (AID) in the Falcon console after deployment. What is the most likely cause?",
    options: [
      "The hosts were imaged from a template where the sensor was installed and started before the image was captured, without clearing the AID first",
      "The hosts are using the wrong sensor update policy",
      "The hosts have Reduced Functionality Mode enabled",
      "The hosts share the same CID"
    ],
    correctAnswer: "The hosts were imaged from a template where the sensor was installed and started before the image was captured, without clearing the AID first",
    explanation: "This is the classic golden-image AID collision problem: if the sensor generates its Agent ID before the image is captured, every clone inherits the same AID, which is why AID-clearing is a required step in VDI/template deployment workflows.",
    sourceReference: "General CrowdStrike VDI/golden-image deployment concept"
  },
  {
    id: 2206,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "easy",
    confidence: "high",
    question: "Which sensor update policy setting is best suited for a small pilot group meant to validate the very latest sensor release before wider rollout?",
    options: ["Auto: N-2", "Auto: N-1", "Auto: Latest", "Sensor version updates off"],
    correctAnswer: "Auto: Latest",
    explanation: "Auto: Latest always tracks the newest released version, which is exactly what a pilot group validating the newest release needs.",
    sourceReference: "General CrowdStrike sensor update policy concept"
  },
  {
    id: 2207,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "high",
    question: "What is the generally recommended approach for rolling out a new major sensor version across a large production environment?",
    options: [
      "Deploy Auto: Latest to all hosts simultaneously",
      "Stage the rollout, starting with a small test/pilot group before wider deployment",
      "Only update sensors during a full uninstall/reinstall cycle",
      "Disable all prevention policies during the update"
    ],
    correctAnswer: "Stage the rollout, starting with a small test/pilot group before wider deployment",
    explanation: "A phased rollout - pilot group first, then wider deployment - limits the blast radius of any unexpected compatibility issue with a new sensor version.",
    sourceReference: "General change-management best practice"
  },
  {
    id: 2208,
    type: "single",
    examDomain: "Sensor Deployment",
    difficulty: "medium",
    confidence: "medium",
    question: "On Linux, which action is typically required before a Falcon sensor uninstall can proceed if Uninstall and Maintenance Protection is enabled?",
    options: [
      "Disabling SELinux",
      "Providing a valid maintenance token via the command line",
      "Rebooting into single-user mode",
      "Removing the host from all host groups first"
    ],
    correctAnswer: "Providing a valid maintenance token via the command line",
    explanation: "Just as on Windows, Linux sensor uninstall respects the Uninstall and Maintenance Protection setting, requiring a valid maintenance token to be supplied via the CLI before uninstall can proceed.",
    sourceReference: "General CrowdStrike sensor protection concept"
  },

  {
    id: 2301,
    type: "single",
    examDomain: "Workflows",
    difficulty: "medium",
    confidence: "medium",
    question: "Which Fusion SOAR trigger type would you use to automatically notify a team the moment a new Incident case is created in Falcon?",
    options: ["Hourly Scheduled Trigger", "New Case Trigger", "Audit - New Detection Trigger", "Alert - EPP Detection Trigger"],
    correctAnswer: "New Case Trigger",
    explanation: "A trigger fires when its named event occurs - here, the creation of a new Incident case, which is what 'New Case Trigger' is scoped for.",
    sourceReference: "Practice dump (exam-specific trigger naming, unverified against official docs)"
  },
  {
    id: 2302,
    type: "single",
    examDomain: "Workflows",
    difficulty: "medium",
    confidence: "medium",
    question: "You want a workflow to run automatically every time a new detection audit event is logged, regardless of severity. Which trigger fits best?",
    options: ["Alert - EPP Detection Trigger", "Audit - New Detection Trigger", "Hourly Scheduled Trigger", "New Case Trigger"],
    correctAnswer: "Audit - New Detection Trigger",
    explanation: "The 'Audit' family of triggers responds to audit-log-level events (like any new detection being logged), rather than a scheduled interval or a specific case/alert type.",
    sourceReference: "Practice dump (exam-specific trigger naming, unverified against official docs)"
  },
  {
    id: 2303,
    type: "single",
    examDomain: "Workflows",
    difficulty: "medium",
    confidence: "high",
    question: "Which file format issue is a common cause of failed Fusion SOAR workflow imports when migrating workflows from external tools?",
    options: [
      "Using JSON when YAML is required",
      "Using YAML or another non-JSON format when JSON is required",
      "File size exceeding 1KB",
      "Missing a .csv file extension"
    ],
    correctAnswer: "Using YAML or another non-JSON format when JSON is required",
    explanation: "Fusion SOAR requires workflows to be in JSON format for import; workflows exported from other tools in YAML or another format will fail unless converted first.",
    sourceReference: "Confirmed consistent with dump Q30"
  },
  {
    id: 2304,
    type: "single",
    examDomain: "Workflows",
    difficulty: "medium",
    confidence: "medium",
    question: "In a Fusion SOAR remediation workflow, which general sequencing is correct for responding to a confirmed malicious process on a host?",
    options: [
      "Generate a compliance report, then isolate the host, then kill the process",
      "Isolate the host first, then take remediation action on the process, then document/report",
      "Apply a policy change before any containment action",
      "Always wait for manual analyst approval before any automated step, regardless of severity"
    ],
    correctAnswer: "Isolate the host first, then take remediation action on the process, then document/report",
    explanation: "Standard incident response sequencing prioritizes containment (isolating the host) before remediation and reporting, to prevent further spread while the threat is addressed.",
    sourceReference: "General incident response sequencing principle"
  },
  {
    id: 2305,
    type: "single",
    examDomain: "Workflows",
    difficulty: "medium",
    confidence: "high",
    question: "What is a key risk of building a Fusion SOAR workflow with an overly broad trigger (e.g., triggering on all detections regardless of severity) for an automated containment action?",
    options: [
      "The workflow will fail to save",
      "It may cause excessive, disruptive automated actions on low-severity or benign detections",
      "It will automatically disable itself after 24 hours",
      "Broad triggers are not permitted by Falcon and will be rejected"
    ],
    correctAnswer: "It may cause excessive, disruptive automated actions on low-severity or benign detections",
    explanation: "Automation without appropriate condition scoping can trigger disruptive actions (like host isolation) on detections that didn't warrant it, which is why conditions are used to narrow triggers to genuinely actionable events.",
    sourceReference: "General SOAR automation best practice"
  }
];
