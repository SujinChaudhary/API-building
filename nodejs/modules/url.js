const claudeURL = "https://claude.ai/chat/7c585ff5-b488-4d46-adc0-8dd76810c4c5?onboarding=1";
const urlObject = new URL(claudeURL);
console.log(urlObject);
console.log(urlObject.searchParams.get('onboarding'));

