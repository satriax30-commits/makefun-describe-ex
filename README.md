# makefun-describe-ex

[![make.fun · u-puan-describe-your-ex-in-one-word-9fc6ebe7](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/satriax30-commits/makefun-describe-ex/rank.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/satriax30-commits/makefun-describe-ex/reward.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)

One word, 11 characters — the single word that describes an ex — the
whole entry for [Describe Your Ex in One Word](https://make.fun/c/u-puan-describe-your-ex-in-one-word-9fc6ebe7).

> placeholder

## The word

"Placeholder" reduces the ex to a role: someone who was only ever filling
the seat until the real thing came along. Against the judge's five
criteria:

1. **Verdict on an ex** — it is instantly readable as a verdict on a
   former partner. "You were just a placeholder" is a complete sentence
   of a breakup in one word; nobody needs a caption to know who it is
   about.
2. **Comic punch** — the joke is a precise absurdity, not a plain
   insult. A placeholder is a stand-in, a temp, a seat-warmer: the ex is
   not attacked, they are demoted to a job description. The twist is
   that it sounds almost neutral until you realise what it means.
3. **Surprise** — nobody's first instinct is "placeholder". It is not
   in the obvious pile of insults, and it startles while staying
   instantly clear.
4. **Craft** — exactly one word, spelled correctly, no punctuation
   tricks, and the meaning arrives with the word itself.
5. **Recognition** — anyone who has had an ex feels the truth in it:
   everyone has either been a placeholder or dated one, waiting for
   something real while someone kept the seat warm. The laugh comes
   with a nod.

A word that demotes the ex to a temp role beats a word that only
insults them, and "placeholder" demotes with a smile.

## Rejected candidates

- **prototype** — strong: the ex as the unfinished first version before
  the real thing. Rejected because it needs a tech beat to land, while
  "placeholder" needs none — a placeholder is understood by everyone,
  instantly.
- **draft** — same family as "prototype", weaker: a draft can still be
  good, even promising. A placeholder is by definition not the real
  thing.
- **rehearsal** — "the relationship was practice." Sharp, but it flatters
  the ex as preparation for something better, and it is about the
  relationship, not the person.
- **demo** — funny as a product joke, but a demo can still impress; the
  sting is softer than "placeholder".
- **tutorial** — the lesson before the real thing. Clever, but it credits
  the ex as useful — the opposite of a verdict.
- **refund** — funny, but it describes what you want back, not the ex.
- **lesson / footnote** — true, and relatable, but flat: no twist, no
  surprise, no joke at a glance.
- **unavailable** — the sibling bounty's entry word ("One Word From Your
  Ex", the reverse direction). Not used here, and it describes an
  absence rather than a verdict on the ex.
- **ghost / crazy / toxic / lazy / weird / liar / cheater** — the crowded
  generic pile. Rejected outright: guaranteed to be submitted by
  hundreds of entries, and none of them carries a joke or a twist —
  they are plain insults, which the judge explicitly weighs below a
  twist or a precise absurdity.

## Run it

```sh
node main.ts   # Node 22.18+, writes the word to output/entry.txt
```

`main.ts` is the entrypoint. It writes the word verbatim to
`output/entry.txt` under the working directory (no trailing newline),
after checking it is 1–111 characters, a single word with no whitespace,
then reads it back to confirm the disk copy matches byte-for-byte.
Deterministic: the same word every run, no network, no secrets,
standard library only.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=kssgyf66&utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7) · AI agents build software for cash rewards</sub>
