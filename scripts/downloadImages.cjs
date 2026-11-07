const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  'hero-calm-mind.jpg': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
  'simran-placeholder.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  'clinic-placeholder.jpg': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
  'service-emotional-wellbeing.jpg': 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80',
  'service-career-counselling.jpg': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  'service-psychology-tuition.jpg': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
  'blog-overthinking.jpg': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
  'blog-procrastination.jpg': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
  'blog-self-esteem.jpg': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
  'concept-cbt.jpg': 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
  'concept-attachment.jpg': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  'concept-boundaries.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'concept-emotion-reg.jpg': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
  'course-mindfulness.jpg': 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80'
};

const destDir = path.join(__dirname, '..', 'public', 'assets', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(name, url) {
  return new Promise((resolve, reject) => {
    const dest = path.join(destDir, name);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const file = fs.createWriteStream(dest);
          redirectRes.pipe(file);
          file.on('finish', () => { file.close(); resolve(name); });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(name); });
      }
    }).on('error', reject);
  });
}

(async () => {
  for (const [name, url] of Object.entries(images)) {
    try {
      await download(name, url);
      console.log('Downloaded:', name);
    } catch (e) {
      console.error('Failed:', name, e.message);
    }
  }
  console.log('All image downloads completed.');
})();
