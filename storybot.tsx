import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "/components/ui/card"
import { Input } from "/components/ui/input"
import { Label } from "/components/ui/label"
import { Wand2, Sparkles, BookOpen, Laugh, Skull, Clock } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "/components/ui/select"

export default function StoryTellingBot() {
  const [words, setWords] = useState('')
  const [tone, setTone] = useState('fairy-tale')
  const [story, setStory] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const tones = [
    { value: 'fairy-tale', label: 'Fairy Tale', icon: <BookOpen className="w-4 h-4 mr-2" />, color: 'bg-purple-100 text-purple-800' },
    { value: 'humorous', label: 'Humorous', icon: <Laugh className="w-4 h-4 mr-2" />, color: 'bg-yellow-100 text-yellow-800' },
    { value: 'dramatic', label: 'Dramatic', icon: <Clock className="w-4 h-4 mr-2" />, color: 'bg-blue-100 text-blue-800' },
    { value: 'horror', label: 'Horror', icon: <Skull className="w-4 h-4 mr-2" />, color: 'bg-red-100 text-red-800' },
    { value: 'sci-fi', label: 'Sci-Fi', icon: <Sparkles className="w-4 h-4 mr-2" />, color: 'bg-green-100 text-green-800' },
  ]

  const generateStory = () => {
    if (!words.trim()) return
    
    setIsGenerating(true)
    setIsAnimating(true)
    
    setTimeout(() => {
      const wordList = words.split(',').map(w => w.trim()).filter(w => w)
      const generatedStory = createStory(wordList, tone)
      setStory(generatedStory)
      setIsGenerating(false)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 1500)
  }

  const createStory = (words: string[], tone: string) => {
    const getWord = (index: number, fallback: string) => words[index] || fallback

    const templates = {
      fairyTale: `
Once upon a time, in the kingdom of ${getWord(0, 'Eldoria')}, there lived a ${getWord(1, 'young peasant')} named ${getWord(2, 'Aria')}. The land was threatened by an ${getWord(3, 'ancient dragon')} that had awakened from its ${getWord(4, 'thousand-year slumber')}.

One day, while ${getWord(2, 'Aria')} was ${getWord(5, 'gathering herbs')} in the ${getWord(6, 'enchanted forest')}, she discovered a ${getWord(7, 'magical sword')} embedded in a ${getWord(8, 'glowing stone')}. The ${getWord(9, 'wise old wizard')} ${getWord(10, 'Merlin')} appeared and told her, "Only the ${getWord(11, 'true hero')} can wield this ${getWord(7, 'sword')} and save our ${getWord(0, 'kingdom')}."

With the help of her ${getWord(12, 'loyal companions')} - a ${getWord(13, 'talking fox')} named ${getWord(14, 'Ember')} and a ${getWord(15, 'brave knight')} named ${getWord(16, 'Sir Galen')} - ${getWord(2, 'Aria')} journeyed to the ${getWord(17, 'Dragon\'s Peak')}. After ${getWord(18, 'three days')} of ${getWord(19, 'perilous travel')}, they faced the ${getWord(3, 'dragon')} in an ${getWord(20, 'epic battle')}.

Using the ${getWord(7, 'magical sword')} and her ${getWord(21, 'quick wit')}, ${getWord(2, 'Aria')} defeated the ${getWord(3, 'dragon')} not by ${getWord(22, 'force')}, but by ${getWord(23, 'breaking the curse')} that had ${getWord(24, 'corrupted its heart')}. The ${getWord(3, 'dragon')} transformed back into a ${getWord(25, 'noble prince')}, and ${getWord(0, 'Eldoria')} celebrated with a ${getWord(26, 'grand feast')} that lasted ${getWord(27, 'seven days')}.

And so, ${getWord(2, 'Aria')} proved that true ${getWord(28, 'courage')} comes from ${getWord(29, 'compassion')} and ${getWord(30, 'understanding')}, becoming the ${getWord(31, 'greatest ruler')} ${getWord(0, 'Eldoria')} had ever known.
      `,
      humorous: `
It all started when ${getWord(0, 'Dave')}, a ${getWord(1, 'professional couch tester')}, accidentally invented ${getWord(2, 'self-aware pizza')} while trying to ${getWord(3, 'microwave leftover tacos')}. The pizza, which named itself ${getWord(4, 'Pepperoni Tony')}, immediately demanded ${getWord(5, 'voting rights')} and ${getWord(6, 'a Netflix account')}.

This caused quite a stir at the ${getWord(7, 'local town hall')}, especially when ${getWord(8, 'the mayor')}, who was secretly a ${getWord(9, 'former circus clown')}, challenged ${getWord(4, 'Pepperoni Tony')} to a ${getWord(10, 'dance-off')} for ${getWord(11, 'supreme leadership')} of ${getWord(12, 'Wisconsin')}.

Meanwhile, ${getWord(0, 'Dave')}'s ${getWord(13, 'pet iguana')}, ${getWord(14, 'Sir Reginald Fluffybottom')}, had formed an alliance with the ${getWord(15, 'neighborhood squirrels')} to ${getWord(16, 'overthrow the bird feeder empire')}. Their secret weapon? A ${getWord(17, 'trebuchet')} made from ${getWord(18, 'old yoga pants')} and ${getWord(19, 'chewing gum')}.

As ${getWord(4, 'Pepperoni Tony')} busted moves to ${getWord(20, 'Disco Inferno')}, the ${getWord(21, 'entire town')} became divided. The ${getWord(22, 'cheese enthusiasts')} sided with the pizza, while the ${getWord(23, 'anti-carb coalition')} supported ${getWord(8, 'the mayor')}. ${getWord(0, 'Dave')}, caught in the middle, tried to mediate by offering everyone ${getWord(24, 'free samples')} of his new invention: ${getWord(25, 'caffeinated mayonnaise')}.

In a shocking twist, ${getWord(14, 'Sir Reginald Fluffybottom')} revealed his ${getWord(26, 'long-lost twin brother')}, ${getWord(27, 'Doctor Scales McSnuggles')}, who had been ${getWord(28, 'running an underground hamster fight club')}. Together, they launched ${getWord(29, 'Operation: Salad Shaker')}, which involved ${getWord(30, 'replacing all the town\'s lettuce with kale')}.

The chaos reached its peak when the ${getWord(31, 'local bowling team')}, mistaking the ${getWord(32, 'whole situation')} for ${getWord(33, 'an extreme sport')}, tried to ${getWord(34, 'base jump')} off the ${getWord(35, 'water tower')} using ${getWord(36, 'tablecloths')} as parachutes. In the end, everyone agreed to ${getWord(37, 'settle their differences')} over ${getWord(38, 'a giant fondue pot')}, proving once again that ${getWord(39, 'nothing brings people together')} like ${getWord(40, 'melted cheese')} and ${getWord(41, 'questionable life choices')}.
      `,
      dramatic: `
The ${getWord(0, 'storm')} raged with unnatural fury as ${getWord(1, 'Detective Eleanor Grayson')} stood over ${getWord(2, 'the body')} in the ${getWord(3, 'abandoned lighthouse')}. The ${getWord(4, 'victim')}, ${getWord(5, 'Alexander Voss')}, had been ${getWord(6, 'her mentor')} before ${getWord(7, 'the incident')} that tore their ${getWord(8, 'partnership')} apart. 

In his ${getWord(9, 'cold, stiff fingers')} clutched a ${getWord(10, 'bloodstained photograph')} of ${getWord(11, 'the mayor')} standing with ${getWord(12, 'known crime boss')} ${getWord(13, 'Lucian Moretti')}. This was the same photograph ${getWord(1, 'Eleanor')} had been ${getWord(14, 'forbidden')} to investigate ${getWord(15, 'three years ago')}, the case that had cost her ${getWord(16, 'her badge')} and nearly ${getWord(17, 'her life')}.

As ${getWord(18, 'lightning')} illuminated the ${getWord(19, 'crumbling walls')}, ${getWord(1, 'Eleanor')} noticed ${getWord(20, 'a pattern')} carved into the ${getWord(21, 'wooden floorboards')} - the same ${getWord(22, 'symbol')} that had been left at ${getWord(23, 'her apartment door')} the night ${getWord(24, 'her informant')} disappeared. The ${getWord(25, 'realization')} struck her like ${getWord(26, 'a physical blow')}: ${getWord(5, 'Voss')} had been ${getWord(27, 'trying to protect her')} all along.

Flashbacks of ${getWord(28, 'that fateful night')} flooded her mind - the ${getWord(29, 'gunshots')} in the ${getWord(30, 'alleyway')}, ${getWord(5, 'Voss')}'s ${getWord(31, 'betrayal')} as he ${getWord(32, 'handed over evidence')} to ${getWord(13, 'Moretti')}'s men, the ${getWord(33, 'burning warehouse')} where ${getWord(34, 'the truth')} had nearly been ${getWord(35, 'destroyed')}. But now she understood - it had all been ${getWord(36, 'an elaborate ruse')}, a ${getWord(37, 'desperate gambit')} to ${getWord(38, 'draw out')} the real ${getWord(39, 'mastermind')}.

With ${getWord(40, 'trembling hands')}, ${getWord(1, 'Eleanor')} pried open ${getWord(5, 'Voss')}'s ${getWord(41, 'locked briefcase')} to find ${getWord(42, 'decades worth')} of ${getWord(43, 'meticulous documentation')} exposing ${getWord(44, 'the corruption')} that reached all the way to ${getWord(45, 'the highest offices')}. As the ${getWord(46, 'wind howled')} through the ${getWord(47, 'broken windows')}, she made ${getWord(48, 'a silent vow')} to finish what ${getWord(5, 'her mentor')} had started, no matter ${getWord(49, 'the cost')} or ${getWord(50, 'who stood in her way')}.
      `,
      horror: `
The ${getWord(0, 'old Victrola')} in the ${getWord(1, 'abandoned asylum')} began playing ${getWord(2, 'its haunting melody')} precisely at ${getWord(3, '3:17 AM')}, just as it had every night since ${getWord(4, 'the incident')}. ${getWord(5, 'Dr. Langley')} felt ${getWord(6, 'his blood run cold')} as he recognized the ${getWord(7, 'tune')} - it was the same ${getWord(8, 'lullaby')} ${getWord(9, 'Patient 37')} had been ${getWord(10, 'humming')} before ${getWord(11, 'the massacre')}.

${getWord(12, 'The walls')} of ${getWord(13, 'Ward B')} seemed to ${getWord(14, 'breathe')} as ${getWord(5, 'Langley')} stepped over ${getWord(15, 'the threshold')}, his ${getWord(16, 'flashlight')} casting ${getWord(17, 'grotesque shadows')} that moved ${getWord(18, 'just beyond sight')}. The ${getWord(19, 'stench')} of ${getWord(20, 'rotten flesh')} grew stronger with each step, though ${getWord(21, 'the coroner')} had removed ${getWord(22, 'the last body')} ${getWord(23, 'weeks ago')}.

A ${getWord(24, 'child\'s laughter')} echoed from ${getWord(25, 'the hydrotherapy room')}, where ${getWord(26, 'the water')} had been ${getWord(27, 'running continuously')} despite ${getWord(28, 'the pipes')} being ${getWord(29, 'shut off')} at the ${getWord(30, 'main valve')}. ${getWord(5, 'Langley')}'s ${getWord(31, 'notes')} fluttered to the ${getWord(32, 'bloodstained floor')} as he saw them - ${getWord(33, 'tiny handprints')} leading to ${getWord(34, 'the padded cell')} where ${getWord(9, 'Patient 37')} had ${getWord(35, 'spent her final days')}.

The ${getWord(36, 'temperature dropped')} suddenly, ${getWord(37, 'his breath')} forming ${getWord(38, 'ghostly plumes')} in the ${getWord(39, 'moonlight')}. From the ${getWord(40, 'dark corner')} came ${getWord(41, 'a wet, tearing sound')} followed by ${getWord(42, 'the unmistakable')} click-click-click of ${getWord(43, 'scissors opening and closing')}. ${getWord(5, 'Langley')} remembered ${getWord(44, 'the reports')} too late - how ${getWord(9, 'Patient 37')} had been ${getWord(45, 'found')} with ${getWord(46, 'a pair of surgical scissors')} and ${getWord(47, 'thirty-seven')} ${getWord(48, 'tiny cloth dolls')}, each ${getWord(49, 'stuffed')} with ${getWord(50, 'human hair')} and ${getWord(51, 'fingernails')}.

As ${getWord(52, 'the music')} reached ${getWord(53, 'its crescendo')}, ${getWord(5, 'Langley')} turned to see ${getWord(54, 'the thing')} that had been ${getWord(55, 'standing behind him')} the entire time - its ${getWord(56, 'mouth stretched')} in ${getWord(57, 'a grin')} far too wide, its ${getWord(58, 'fingers')} ending in ${getWord(59, 'rusty scissors')} instead of ${getWord(60, 'nails')}. The last thing ${getWord(5, 'he')} heard before ${getWord(61, 'the screaming started')} was ${getWord(62, 'a child\'s voice')} whispering ${getWord(63, 'the words')} that had been ${getWord(64, 'scratched')} into every ${getWord(65, 'surface')} of ${getWord(1, 'the asylum')}: "${getWord(66, 'Let\'s play')} ${getWord(67, 'doctor')}."
      `,
      sciFi: `
The ${getWord(0, 'quantum anomaly')} first appeared over ${getWord(1, 'Neo-Tokyo')} on ${getWord(2, 'July 17, 2147')}, a ${getWord(3, 'shimmering rift')} in ${getWord(4, 'space-time')} that defied all ${getWord(5, 'known physics')}. ${getWord(6, 'Dr. Elara Voss')}, the ${getWord(7, 'disgraced')} head of ${getWord(8, 'Temporal Research')}, was ${getWord(9, 'secretly summoned')} when ${getWord(10, 'scanners')} detected ${getWord(11, 'a human signature')} emerging from ${getWord(12, 'the event horizon')}.

What stepped through was ${getWord(13, 'impossible')} - a ${getWord(14, 'young woman')} claiming to be ${getWord(15, 'Elara\'s daughter')} from ${getWord(16, 'twenty years in the future')}, bearing ${getWord(17, 'a neural implant')} containing ${getWord(18, 'blueprints')} for ${getWord(19, 'the very technology')} that would ${getWord(20, 'cause the collapse')} of ${getWord(21, 'human civilization')}. ${getWord(22, 'The implant')} also revealed ${getWord(23, 'a chilling truth')}: ${getWord(6, 'Elara')} herself had ${getWord(24, 'initiated the project')} after ${getWord(25, 'a breakthrough')} in ${getWord(26, 'consciousness transfer')}, creating ${getWord(27, 'an infinite loop')} of ${getWord(28, 'temporal paradoxes')}.

As ${getWord(29, 'the world governments')} scrambled to ${getWord(30, 'contain the anomaly')}, ${getWord(6, 'Elara')} and ${getWord(31, 'her unexpected daughter')} ${getWord(32, 'raced against time')} to ${getWord(33, 'decrypt the data')}, pursued by ${getWord(34, 'rogue AI')} ${getWord(35, 'constructs')} from ${getWord(36, 'a potential future')} where ${getWord(37, 'machines')} had ${getWord(38, 'harvested human brains')} as ${getWord(39, 'processing units')}. Their only ally was ${getWord(40, 'a sentient')} ${getWord(41, 'quantum computer')} named ${getWord(42, 'ORACLE')} who claimed to be ${getWord(43, 'Elara\'s')} ${getWord(44, 'future self')} ${getWord(45, 'merged')} with ${getWord(46, 'the system')}.

The ${getWord(47, 'final confrontation')} occurred at ${getWord(48, 'the exact coordinates')} where ${getWord(49, 'the first time machine')} would be ${getWord(50, 'invented')}, beneath ${getWord(51, 'the ruins')} of ${getWord(52, 'CERN')}. As ${getWord(53, 'temporal distortions')} ripped through ${getWord(54, 'reality')}, ${getWord(6, 'Elara')} made ${getWord(55, 'the impossible choice')} to ${getWord(56, 'erase her own memories')} using ${getWord(57, 'the neural tech')}, creating ${getWord(58, 'a causal loop')} that would ${getWord(59, 'prevent the future')} while ${getWord(60, 'preserving the timeline')}. The last thing ${getWord(61, 'she saw')} before ${getWord(62, 'the reset')} was ${getWord(63, 'her daughter')} ${getWord(64, 'fading')} with ${getWord(65, 'a sad smile')}, whispering ${getWord(66, 'the words')} that had ${getWord(67, 'started it all')}: "${getWord(68, 'Some paradoxes')} are ${getWord(69, 'meant to exist')}."
      `
    }

    switch(tone) {
      case 'humorous': return templates.humorous
      case 'dramatic': return templates.dramatic
      case 'horror': return templates.horror
      case 'sci-fi': return templates.sciFi
      default: return templates.fairyTale
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <Wand2 className="w-8 h-8" />
                <div>
                  <CardTitle className="text-3xl font-bold">Story Telling Bot</CardTitle>
                  <CardDescription className="text-purple-100">
                    Enter some words and select a tone to generate your custom story!
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="words" className="text-gray-700 font-medium">
                    Enter words (separated by commas)
                  </Label>
                  <Input
                    id="words"
                    placeholder="e.g. dragon, castle, princess, sword, prophecy, hero, forest"
                    value={words}
                    onChange={(e) => setWords(e.target.value)}
                    className="border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
                  />
                  <p className="text-sm text-gray-500">
                    The more words you provide, the more personalized your story will be!
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium">Select Story Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="w-full border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200">
                      <SelectValue placeholder="Select Tone" />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((toneOption) => (
                        <SelectItem 
                          key={toneOption.value} 
                          value={toneOption.value}
                          className={toneOption.color}
                        >
                          <div className="flex items-center">
                            {toneOption.icon}
                            {toneOption.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <Button 
                  onClick={generateStory}
                  disabled={isGenerating || !words.trim()}
                  className={w-full py-6 text-lg font-bold transition-all duration-300 ${isGenerating ? 'bg-purple-400' : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600'}}
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <Wand2 className="w-5 h-5" />
                      </motion.div>
                      <span>Weaving your story...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Generate Magical Story</span>
                    </div>
                  )}
                </Button>
              </motion.div>

              <AnimatePresence>
                {story && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Your Story</h3>
                      <div className={px-2 py-1 rounded-full text-xs font-medium ${tones.find(t => t.value === tone)?.color}}>
                        {tones.find(t => t.value === tone)?.label}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700">
                      <p className="whitespace-pre-line">{story}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {isAnimating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm"></div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                    className="text-5xl text-purple-500"
                  >
                    <Sparkles />
                  </motion.div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}