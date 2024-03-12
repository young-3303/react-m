interface Vocabulary {
    label: string
    bold: boolean
    explain?: string
    explainVisible?: boolean
}

const vocabularyArray: Vocabulary[] = [
  { label: 'be absorbed in', bold: false, explain: '' },
  { label: 'be immersed in', bold: true, explain: '' },
  { label: 'concentrate on', bold: false, explain: '' },
  { label: 'indulge in', bold: false, explain: '' },
  { label: 'focus on', bold: false, explain: '' },
  { label: 'keep ones mind on', bold: false, explain: '' },
  { label: 'assimilate', bold: false, explain: '' },
  { label: 'digest', bold: false, explain: '' },
  { label: 'take in', bold: false, explain: '' },
  { label: 'abundant', bold: false, explain: '' },
  { label: 'plentiful', bold: false, explain: '' },
  { label: 'considerable', bold: false, explain: '' },
  { label: 'handsome', bold: false, explain: '' },
  { label: 'numerous', bold: false, explain: '' },
  { label: 'substantial', bold: false, explain: '' },
  { label: 'massive', bold: false, explain: '' },
  { label: 'acceptance', bold: false, explain: '' },
  { label: 'accomplish', bold: false, explain: '' },
  { label: 'complete', bold: false, explain: '' },
  { label: 'achieve', bold: false, explain: '' },
  { label: 'attain', bold: true, explain: '' },
  { label: 'fulfill', bold: false, explain: '' },
  { label: 'account', bold: false, explain: '' },
  { label: 'explain', bold: false, explain: '' },
  { label: 'be responsible for', bold: false, explain: '' },
  { label: 'accumulate', bold: false, explain: '' },
  { label: 'pile', bold: false, explain: '' },
  { label: 'roll', bold: false, explain: '' },
  { label: 'store', bold: false, explain: '' },
  { label: 'scrape up', bold: false, explain: '' },
  { label: 'collect', bold: false, explain: '' },
  { label: 'gather', bold: false, explain: '' },
  { label: 'compile', bold: false, explain: '' },
  { label: 'amass', bold: false, explain: '' },
  { label: 'be applicable to/for', bold: false, explain: '' },
  { label: 'be appropriate for', bold: false, explain: '' },
  { label: 'be suitable for', bold: false, explain: '' },
  { label: 'go for', bold: false, explain: '' },
  { label: 'adhere to', bold: false, explain: '' },
  { label: 'cling to', bold: false, explain: '' },
  { label: 'stick to', bold: false, explain: '' },
  { label: 'persist in', bold: false, explain: '' },
  { label: 'insist on', bold: false, explain: '' },
  { label: 'sophisticated', bold: false, explain: '' },
  { label: 'complex', bold: false, explain: '' },
  { label: 'complicated', bold: false, explain: '' },
  { label: 'detailed', bold: false, explain: '' },
  { label: 'exquisite', bold: false, explain: '' },
  { label: 'advanced', bold: false, explain: '' },
  { label: 'progressive', bold: false, explain: '' },
  { label: 'experienced', bold: false, explain: '' },
  { label: 'adverse', bold: false, explain: '' },
  { label: 'unfavorable', bold: false, explain: '' },
  { label: 'harmful', bold: false, explain: '' },
  { label: 'inauspicious', bold: false, explain: '' },
  { label: 'untoward', bold: false, explain: '' },
  { label: 'adversity', bold: false, explain: '' },
  { label: 'hardship', bold: false, explain: '' },
  { label: 'misfortune', bold: false, explain: '' },
  { label: 'hard knocks', bold: false, explain: '' },
  { label: 'affluent', bold: false, explain: '' },
  { label: 'wealthy', bold: false, explain: '' },
  { label: 'moneyed', bold: false, explain: '' },
  { label: 'aggressively', bold: false, explain: '' },
  { label: 'sharply', bold: false, explain: '' },
  { label: 'vigorously', bold: false, explain: '' },
  { label: 'energetically', bold: false, explain: '' },
  { label: 'alarm', bold: false, explain: '' },
  { label: 'warn', bold: false, explain: '' },
  { label: 'alert', bold: false, explain: '' },
  { label: 'panic', bold: false, explain: '' },
  { label: 'terror', bold: false, explain: '' },
  { label: 'fright', bold: false, explain: '' },
  { label: 'fear', bold: false, explain: '' },
  { label: 'anxiety', bold: false, explain: '' },
  { label: 'alertness', bold: false, explain: '' },
  { label: 'vigilance', bold: false, explain: '' },
  { label: 'guard', bold: false, explain: '' },
  { label: 'sensitivity', bold: true, explain: '' },
  { label: 'alien', bold: false, explain: '' },
  { label: 'unfamiliar', bold: true, explain: '' },
  { label: 'strange', bold: false, explain: '' },
  { label: 'deem', bold: false, explain: '' },
  { label: 'view as', bold: true, explain: '' },
  { label: 'count', bold: false, explain: '' },
  { label: 'regard', bold: false, explain: '' },
  { label: 'perceive', bold: true, explain: '' },
  { label: 'ambiguous', bold: true, explain: '模棱两可、模糊的' },
  { label: 'obscure', bold: true, explain: '模糊的' },
  { label: 'blurry', bold: false, explain: '' },
  { label: 'fuzzy', bold: false, explain: '' },
  { label: 'vague', bold: true, explain: '' },
  { label: 'amount to', bold: false, explain: '' },
  { label: 'add up to', bold: false, explain: '' },
  { label: 'in general', bold: false, explain: '' },
  { label: 'generally speaking', bold: false, explain: '' },
  { label: 'in short', bold: false, explain: '' },
  { label: 'in conclusion', bold: false, explain: '' },
  { label: 'anguish', bold: true, explain: '' },
  { label: 'misery', bold: true, explain: '' },
  { label: 'torment', bold: false, explain: '' },
  { label: 'woe', bold: false, explain: '' },
  { label: 'suffering', bold: true, explain: '' },
  { label: 'pathos', bold: false, explain: '' },
  { label: 'artificial', bold: true, explain: '' },
  { label: 'synthetic', bold: true, explain: '' },
  { label: 'man-made', bold: false, explain: '' },
  { label: 'relevant', bold: false, explain: '' },
  { label: 'concerned', bold: false, explain: '' },
  { label: 'involved', bold: false, explain: '' },
  { label: 'appoint', bold: false, explain: '' },
  { label: 'nominate', bold: false, explain: '' },
  { label: 'delegate', bold: false, explain: '' },
  { label: 'announce', bold: false, explain: '' },
  { label: 'declare', bold: false, explain: '' },
  { label: 'proclaim', bold: false, explain: '' },
  { label: 'approach', bold: false, explain: '' },
  { label: 'method', bold: false, explain: '' },
  { label: 'means', bold: false, explain: '' },
  { label: 'strategy', bold: false, explain: '' },
  { label: 'tactic', bold: false, explain: '' },
  { label: 'arouse', bold: true, explain: '唤醒' },
  { label: 'awaken', bold: true, explain: '唤醒' },
  { label: 'evoke', bold: false, explain: '' },
  { label: 'provoke', bold: true, explain: '引发' },
  { label: 'kindle', bold: false, explain: '' },
  { label: 'wake up', bold: false, explain: '' },
  { label: 'apparent', bold: true, explain: '明显的' },
  { label: 'obvious', bold: true, explain: '显而易见的' },
  { label: 'evident', bold: false, explain: '' },
  { label: 'manifest', bold: true, explain: '显然的' },
  { label: 'appearance', bold: false, explain: '' },
  { label: 'occurrence', bold: true, explain: '发生、出现的事' },
  { label: 'emergence', bold: false, explain: '' },
  { label: 'as opposed to', bold: true, explain: '' },
  { label: 'run against', bold: true, explain: '' },
  { label: 'take issue with', bold: true, explain: '有异议于' },
  { label: 'object to', bold: false, explain: '' },
  { label: 'be opposite to', bold: true, explain: '相反于' },
  { label: 'in contrast to', bold: true, explain: '相较于 ' },
  { label: 'violate', bold: true, explain: '违反' },
  { label: 'protest', bold: false, explain: '抗议' },
  { label: 'oppose', bold: false, explain: '' },
  { label: 'be tied to', bold: false, explain: '被紧密联系在' },
  { label: 'be bound to', bold: false, explain: '注定' },
  { label: 'ascertain', bold: true, explain: '' },
  { label: 'confirm', bold: false, explain: '' },
  { label: 'verify', bold: false, explain: '' },
  { label: 'determine', bold: true, explain: '' },
  { label: 'ascribed to', bold: true, explain: '归因于' },
  { label: 'attributed to', bold: true, explain: '归因于' },
  { label: 'caused by', bold: false, explain: '' },
  { label: 'aspiration', bold: true, explain: '抱负' },
  { label: 'assertive', bold: false, explain: '' },
  { label: 'judgment', bold: false, explain: '' },
  { label: 'assess', bold: true, explain: '评估' },
  { label: 'estimate', bold: true, explain: '估计' },
  { label: 'evaluate', bold: true, explain: '评估' },
  { label: 'at length', bold: true, explain: '详细地' },
  { label: 'in detail', bold: true, explain: '' },
]
vocabularyArray.forEach(item => {
    item.explainVisible = false
})
export default vocabularyArray
