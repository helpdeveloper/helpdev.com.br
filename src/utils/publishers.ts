export const getPublisher = (url: string) => {
  if (url.includes('luizalabs')) {
    return { name: 'Luiza Labs', color: 'bg-blue-100 text-blue-600' };
  } else if (url.includes('picpay')) {
    return { name: 'PicPay', color: 'bg-green-100 text-green-600' };
  }
  return { name: 'Medium', color: 'bg-gray-100 text-gray-600' };
};

export const getTagColor = (tag: string): string => {
  const colors: Record<string, string> = {
    'java': 'bg-red-100 text-red-800',
    'python': 'bg-blue-100 text-blue-800',
    'c++': 'bg-purple-100 text-purple-800',
    'javascript': 'bg-yellow-100 text-yellow-800',
    'typescript': 'bg-blue-100 text-blue-800',
    'kotlin': 'bg-purple-100 text-purple-800',
    'c': 'bg-gray-100 text-gray-800',
    'html': 'bg-orange-100 text-orange-800',
    'css': 'bg-pink-100 text-pink-800',
    'shell': 'bg-green-100 text-green-800',
    'ruby': 'bg-red-100 text-red-800',
    'swift': 'bg-orange-100 text-orange-800',
    'go': 'bg-cyan-100 text-cyan-800',
    'rust': 'bg-orange-100 text-orange-800',
    'arduino': 'bg-teal-100 text-teal-800',
    'android': 'bg-green-100 text-green-800',
    'aws': 'bg-blue-100 text-blue-800',
    'sns': 'bg-green-100 text-green-800',
    'sqs': 'bg-yellow-100 text-yellow-800',
    's3': 'bg-orange-100 text-orange-800',
    'lambda': 'bg-purple-100 text-purple-800',
    'architecture': 'bg-gray-100 text-gray-800',
    'clean': 'bg-teal-100 text-teal-800',
    'design': 'bg-pink-100 text-pink-800',
    'adr': 'bg-red-100 text-red-800',
    'k8s': 'bg-blue-100 text-blue-800',
    'kubernetes': 'bg-blue-100 text-blue-800',
    'ingress': 'bg-green-100 text-green-800',
    'jvm': 'bg-red-100 text-red-800',
    'performance': 'bg-yellow-100 text-yellow-800',
    'containers': 'bg-cyan-100 text-cyan-800'
  };

  return colors[tag.toLowerCase()] || 'bg-gray-100 text-gray-800';
};

export const getLanguageColor = (language: string): string => {
  const colors: Record<string, string> = {
    'Java': 'bg-red-100 text-red-800',
    'Python': 'bg-blue-100 text-blue-800',
    'C++': 'bg-purple-100 text-purple-800',
    'JavaScript': 'bg-yellow-100 text-yellow-800',
    'TypeScript': 'bg-blue-100 text-blue-800',
    'Kotlin': 'bg-purple-100 text-purple-800',
    'C': 'bg-gray-100 text-gray-800',
    'HTML': 'bg-orange-100 text-orange-800',
    'CSS': 'bg-pink-100 text-pink-800',
    'Shell': 'bg-green-100 text-green-800',
    'Ruby': 'bg-red-100 text-red-800',
    'Swift': 'bg-orange-100 text-orange-800',
    'Go': 'bg-cyan-100 text-cyan-800',
    'Rust': 'bg-orange-100 text-orange-800',
    'Arduino': 'bg-teal-100 text-teal-800',
    'Android': 'bg-green-100 text-green-800',
    'Spring Boot': 'bg-green-100 text-green-800',
    'Docker': 'bg-blue-100 text-blue-800'
  };
  
  return colors[language] || 'bg-gray-100 text-gray-800';
};
