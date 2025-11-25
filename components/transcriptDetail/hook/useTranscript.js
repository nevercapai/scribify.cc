import { ref } from 'vue';

export default function useTranscript() {
  // 获取段落的完整文本
  const getParagraphText = (paragraph) => {
    if (!paragraph || !paragraph.sentences) return "";

    return paragraph.sentences
      .map((sentence) =>
        sentence.contents.map((content) => content.content).join("")
      )
      .join(" ");
  };

  return {
    getParagraphText
  };
} 