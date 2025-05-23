import { Question } from "@/types/question";

export const sampleQuestions: Question[] = [
  {
    id: 1,
    chapter: "人工知能とは",
    stem: "人工知能（AI）の定義として最も近いものはどれか？",
    choices: [
      "人間の脳神経回路を完全に再現したコンピューターシステム",
      "人間のように感情や意識を持つことができる機械",
      "知的な推論や学習など、人間が行う知的な振る舞いを模倣・代替する技術",
      "与えられたプログラムに従って高速に計算処理を行うシステム"
    ],
    answerIndex: 2,
    explanation: "AIは、人間が行う知的な作業（考える・覚える・判断するなど）をコンピューターで真似したり代わりにやらせたりする技術です。"
  },
  {
    id: 2,
    chapter: "人工知能とは",
    stem: "「強いAI」と「弱いAI」の違いとして正しいものはどれか？",
    choices: [
      "強いAIは人間のような意識や汎用的な知能を持つ。弱いAIは特定のタスクだけが得意。",
      "強いAIは計算速度が速い。弱いAIは遅い。",
      "強いAIは大量のデータで学習する。弱いAIは少ないデータで学習する。",
      "強いAIは感情を持つ。弱いAIは感情を持たない。"
    ],
    answerIndex: 0,
    explanation: "強いAIは人間のような幅広い知能や意識を持つとされますが、現実にはまだ存在しません。今使われているAIのほとんどは、特定の仕事だけが得意な弱いAIです。"
  },
  {
    id: 3,
    chapter: "人工知能とは",
    stem: "AIの研究で『身体性』が重要とされる理由に関係する問題はどれか？",
    choices: [
      "フレーム問題",
      "シンボルグラウンディング問題",
      "チューリングテスト",
      "チャイニーズルーム問題"
    ],
    answerIndex: 1,
    explanation: "シンボルグラウンディング問題は、言葉や記号と実際の物や体験をどう結びつけるか、という問題です。身体を持って体験することが本当の理解につながるという考え方です。"
  },
  {
    id: 4,
    chapter: "人工知能とは",
    stem: "ロボットが掃除をする時、『何が変わって何が変わらないか』を判断するのが難しい問題はどれか？",
    choices: [
      "シンボルグラウンディング問題",
      "フレーム問題",
      "チューリングテスト",
      "トイプロブレム"
    ],
    answerIndex: 1,
    explanation: "フレーム問題は、行動した時に世の中の何が変わるか、何が変わらないかを全部考えるのは大変だ、という問題です。"
  },
  {
    id: 5,
    chapter: "機械学習の概要",
    stem: "教師あり学習の説明として正しいものはどれか？",
    choices: [
      "入力データと正解ラベルのペアを使って学習する方法",
      "入力データだけでグループ分けする方法",
      "報酬を最大化するように学習する方法",
      "人間の介入なしに自律的に学習する方法"
    ],
    answerIndex: 0,
    explanation: "教師あり学習は、正解付きのデータを使ってAIに学ばせる方法です。"
  },
  {
    id: 6,
    chapter: "機械学習の概要",
    stem: "教師なし学習の代表的な手法はどれか？",
    choices: [
      "ランダムフォレスト",
      "サポートベクターマシン",
      "k-means法",
      "ロジスティック回帰"
    ],
    answerIndex: 2,
    explanation: "k-means法は、正解のないデータをグループ分けする教師なし学習の代表例です。"
  },
  {
    id: 7,
    chapter: "機械学習の概要",
    stem: "過学習（オーバーフィッティング）を防ぐ方法として適切でないものはどれか？",
    choices: [
      "正則化を使う",
      "データ拡張を行う",
      "ドロップアウトを使う",
      "モデルの層を増やす"
    ],
    answerIndex: 3,
    explanation: "モデルの層を増やすと複雑になり、かえって過学習しやすくなります。"
  },
  {
    id: 8,
    chapter: "機械学習の概要",
    stem: "決定木の特徴として正しくないものはどれか？",
    choices: [
      "解釈しやすい",
      "非線形の関係も捉えられる",
      "特徴量のスケーリングが不要",
      "過学習しにくい"
    ],
    answerIndex: 3,
    explanation: "決定木は深くなりすぎると過学習しやすい特徴があります。"
  },
  {
    id: 9,
    chapter: "機械学習の概要",
    stem: "ランダムフォレストの特徴はどれか？",
    choices: [
      "複数の決定木を組み合わせて予測する",
      "1本の深い決定木だけを使う",
      "ニューラルネットワークの一種である",
      "教師なし学習で使われる"
    ],
    answerIndex: 0,
    explanation: "ランダムフォレストは複数の決定木を使って予測の精度を高める手法です。"
  },
  {
    id: 10,
    chapter: "機械学習の概要",
    stem: "サポートベクターマシン（SVM）の特徴はどれか？",
    choices: [
      "データを分ける境界線（マージン）を最大化する",
      "データをグループ分けする教師なし学習の手法",
      "画像認識専用の手法",
      "決定木の一種"
    ],
    answerIndex: 0,
    explanation: "SVMは、データをできるだけ広い間隔で分ける境界線を見つける手法です。"
  },
  {
    id: 11,
    chapter: "ディープラーニングの手法",
    stem: "ディープラーニングにおける勾配消失問題の対策として適切でないものはどれか？",
    choices: [
      "ReLU関数の使用",
      "バッチ正規化の導入",
      "残差接続（ResNet）の採用",
      "学習率の大幅な引き上げ"
    ],
    answerIndex: 3,
    explanation: "学習率を急に上げすぎると、学習がうまくいかなくなることがあります。他の選択肢は勾配消失問題の対策です。"
  },
  {
    id: 12,
    chapter: "ディープラーニングの手法",
    stem: "畳み込みニューラルネットワーク（CNN）が特に効果を発揮する分野はどれか？",
    choices: [
      "時系列データ分析",
      "画像認識",
      "強化学習",
      "異常検知"
    ],
    answerIndex: 1,
    explanation: "CNNは画像の特徴を見つけるのが得意で、画像認識でよく使われます。"
  },
  {
    id: 13,
    chapter: "ディープラーニングの応用",
    stem: "Transformerモデルの核となる機構はどれか？",
    choices: [
      "再帰結合",
      "セルメモリ",
      "自己注意機構",
      "畳み込み層"
    ],
    answerIndex: 2,
    explanation: "Transformerの中心は自己注意機構（Self-Attention）で、文章中の単語同士の関係をうまく捉えます。"
  },
  {
    id: 14,
    chapter: "ディープラーニングの応用",
    stem: "BERTモデルの事前学習タスクとして含まれないものはどれか？",
    choices: [
      "マスク言語モデル（MLM）",
      "次文予測（NSP）",
      "文書分類",
      "双方向エンコーディング"
    ],
    answerIndex: 2,
    explanation: "文書分類はBERTを使った応用タスクで、事前学習タスクではありません。"
  },
  {
    id: 15,
    chapter: "機械学習の概要",
    stem: "強化学習における「報酬」の説明として最も適切なものはどれか？",
    choices: [
      "エージェントが環境から受け取る観測情報",
      "エージェントが取る行動の集合",
      "エージェントの行動に対する環境からのフィードバック信号",
      "エージェントが学習した方策（ポリシー）"
    ],
    answerIndex: 2,
    explanation: "報酬は、AIが行動した結果として環境からもらうごほうびや罰のことです。"
  },
  {
    id: 16,
    chapter: "機械学習の概要",
    stem: "Q学習のアルゴリズムが推定しようとする値はどれか？",
    choices: [
      "状態の価値",
      "状態と行動のペアの価値",
      "行動の確率分布",
      "環境のモデルパラメータ"
    ],
    answerIndex: 1,
    explanation: "Q学習は、今の状況でこの行動を取ったら将来どれくらいの報酬が期待できるか（Q値）を学習します。"
  },
  {
    id: 17,
    chapter: "AIの社会実装に向けて",
    stem: "AIの倫理的課題として適切でないものはどれか？",
    choices: [
      "プライバシーの侵害",
      "意思決定の透明性",
      "計算コストの増大",
      "雇用への影響"
    ],
    answerIndex: 2,
    explanation: "計算コストの増大は技術的・経済的課題であり、倫理的課題ではありません。"
  },
  {
    id: 18,
    chapter: "AIの社会実装に向けて",
    stem: "AIの公平性を確保するための方法として適切でないものはどれか？",
    choices: [
      "訓練データのバイアス除去",
      "モデルの解釈可能性の向上",
      "多様なステークホルダーの参加",
      "計算効率の最大化"
    ],
    answerIndex: 3,
    explanation: "計算効率の最大化は公平性確保とは直接関係ありません。"
  },
  {
    id: 19,
    chapter: "人工知能とは",
    stem: "弱いAI（Weak AI）と強いAI（Strong AI）の区別として正しいものはどれか？",
    choices: [
      "計算能力の高低による区別",
      "特定のタスクに特化しているか汎用的知能を持つかの区別",
      "学習能力の有無による区別",
      "ハードウェアの性能による区別"
    ],
    answerIndex: 1,
    explanation: "弱いAIは特定のタスクに特化したAI、強いAIは人間のような汎用的知能を持つAIです。"
  },
  {
    id: 21,
    chapter: "ディープラーニングの手法",
    stem: "ディープラーニングが従来の機械学習と比較して優れている点はどれか？",
    choices: [
      "解釈可能性が高い",
      "少量のデータでも高い性能を発揮する",
      "特徴量の自動抽出が可能",
      "計算コストが低い"
    ],
    answerIndex: 2,
    explanation: "ディープラーニングは特徴量を自動で抽出できるのが大きな利点です。"
  },
  {
    id: 22,
    chapter: "ディープラーニングの応用",
    stem: "単語の分散表現（Word Embedding）の特徴として正しいものはどれか？",
    choices: [
      "単語を独立した記号として扱う",
      "単語間の意味的類似性を数値ベクトルで表現する",
      "文法規則に基づいて単語を解析する",
      "単語の出現頻度のみを考慮する"
    ],
    answerIndex: 1,
    explanation: "単語の分散表現は、意味が近い単語ほど数値的にも近くなります。"
  },
  {
    id: 23,
    chapter: "機械学習の概要",
    stem: "強化学習における「探索と活用のトレードオフ」の説明として最も適切なものはどれか？",
    choices: [
      "計算リソースと精度のバランス",
      "オンライン学習とバッチ学習の選択",
      "新しい行動の試行と既知の良い行動の選択のバランス",
      "モデルの複雑さと汎化性能のトレードオフ"
    ],
    answerIndex: 2,
    explanation: "探索は新しい行動を試すこと、活用は今までで一番良かった行動を選ぶことです。"
  },
  {
    id: 24,
    chapter: "AIの社会実装に向けて",
    stem: "AIの発展に伴う雇用への影響として最も適切な見解はどれか？",
    choices: [
      "すべての仕事がAIに置き換わる",
      "一部の仕事は自動化されるが新しい仕事も生まれる",
      "AIは雇用に全く影響しない",
      "AIは芸術分野にしか影響しない"
    ],
    answerIndex: 1,
    explanation: "AIの発展で一部の仕事は自動化されますが、新しい仕事も生まれると考えられています。"
  },
  {
    id: 25,
    chapter: "AI倫理・AIガバナンス",
    stem: "チューリングテストの目的として最も適切なものはどれか？",
    choices: [
      "コンピュータの計算速度を測定する",
      "機械が人間と区別できないほど知的かどうかを判定する",
      "プログラミング言語の効率性を評価する",
      "ニューラルネットワークの層の深さを決定する"
    ],
    answerIndex: 1,
    explanation: "チューリングテストは、人間と区別できないほど知的かどうかを判定するためのテストです。"
  },
  {
    id: 26,
    chapter: "機械学習の概要",
    stem: "決定木アルゴリズムの特徴として適切でないものはどれか？",
    choices: [
      "解釈可能性が高い",
      "非線形の関係性を捉えられる",
      "特徴量のスケーリングが不要",
      "過学習しにくい"
    ],
    answerIndex: 3,
    explanation: "決定木は過学習しやすいという特徴があります。"
  },
  {
    id: 27,
    chapter: "ディープラーニングの手法",
    stem: "活性化関数ReLUの特徴として正しいものはどれか？",
    choices: [
      "出力が常に0か1になる",
      "負の値は0、正の値はそのまま出力する",
      "出力が確率になる",
      "入力値をそのまま出力する"
    ],
    answerIndex: 1,
    explanation: "ReLUは0以下の値を0にし、0より大きい値はそのまま出力します。"
  },
  {
    id: 28,
    chapter: "ディープラーニングの応用",
    stem: "形態素解析の目的として正しいものはどれか？",
    choices: [
      "文章を単語などの最小単位に分けること",
      "文章の意味を理解すること",
      "文章の感情を判定すること",
      "文章の文法を解析すること"
    ],
    answerIndex: 0,
    explanation: "形態素解析は、文章を単語などの最小単位に分ける処理です。"
  },
  {
    id: 29,
    chapter: "AIの社会実装に向けて",
    stem: "AIのバイアス問題とは何か？",
    choices: [
      "AIが計算ミスをすること",
      "AIが特定の傾向や偏りを持つこと",
      "AIが学習できないこと",
      "AIが高速に処理できること"
    ],
    answerIndex: 1,
    explanation: "AIのバイアス問題は、学習データや設計によって特定の傾向や偏りが生じることです。"
  },
  {
    id: 30,
    chapter: "機械学習の概要",
    stem: "交差検証（クロスバリデーション）の目的はどれか？",
    choices: [
      "モデルの汎化性能を評価するため",
      "学習データを増やすため",
      "計算コストを下げるため",
      "特徴量を増やすため"
    ],
    answerIndex: 0,
    explanation: "交差検証は、モデルが新しいデータにも対応できるか（汎化性能）を評価する方法です。"
  },
  {
    id: 31,
    chapter: "ディープラーニングの手法",
    stem: "バッチ正規化（Batch Normalization）の主な効果はどれか？",
    choices: [
      "学習を安定させ、収束を早くする",
      "モデルのサイズを小さくする",
      "データの前処理を簡単にする",
      "学習率を自動で調整する"
    ],
    answerIndex: 0,
    explanation: "バッチ正規化は、学習を安定させて早く終わらせる効果があります。"
  },
  {
    id: 32,
    chapter: "ディープラーニングの応用",
    stem: "単語ベクトル（Word2Vecなど）の利点はどれか？",
    choices: [
      "単語の意味的な関係を数値で表現できる",
      "単語の出現頻度だけを考慮する",
      "単語をランダムに並べる",
      "単語のスペルミスを自動修正する"
    ],
    answerIndex: 0,
    explanation: "単語ベクトルは、意味が近い単語ほど数値的にも近くなります。"
  },
  {
    id: 33,
    chapter: "AIの社会実装に向けて",
    stem: "AIの説明可能性（Explainability）とは何か？",
    choices: [
      "AIがどのように判断したかを人が理解できること",
      "AIが高速に処理できること",
      "AIが自動で学習できること",
      "AIが感情を持つこと"
    ],
    answerIndex: 0,
    explanation: "説明可能性は、AIの判断理由を人が理解できることを指します。"
  },
  {
    id: 34,
    chapter: "機械学習の概要",
    stem: "特徴量エンジニアリングの目的はどれか？",
    choices: [
      "モデルの性能を上げるためにデータを工夫すること",
      "データの量を増やすこと",
      "モデルのサイズを小さくすること",
      "学習率を調整すること"
    ],
    answerIndex: 0,
    explanation: "特徴量エンジニアリングは、モデルがより良い予測をできるようにデータを工夫することです。"
  },
  {
    id: 35,
    chapter: "ディープラーニングの手法",
    stem: "残差接続（ResNet）の主な利点はどれか？",
    choices: [
      "深いネットワークでも学習しやすくする",
      "計算コストを下げる",
      "データの前処理を簡単にする",
      "モデルのサイズを小さくする"
    ],
    answerIndex: 0,
    explanation: "残差接続は、深いネットワークでも勾配消失しにくく学習しやすくします。"
  },
  {
    id: 36,
    chapter: "ディープラーニングの応用",
    stem: "形態素解析器MeCabの用途はどれか？",
    choices: [
      "日本語の文章を単語に分ける",
      "英語の文法を解析する",
      "画像を分類する",
      "音声を認識する"
    ],
    answerIndex: 0,
    explanation: "MeCabは日本語の文章を単語などに分けるためのツールです。"
  },
  {
    id: 37,
    chapter: "AIの社会実装に向けて",
    stem: "AIの透明性（Transparency）とは何か？",
    choices: [
      "AIの仕組みや判断基準が公開されていること",
      "AIが自動で学習できること",
      "AIが高速に処理できること",
      "AIが感情を持つこと"
    ],
    answerIndex: 0,
    explanation: "透明性は、AIの仕組みや判断基準が公開されていることを指します。"
  },
  {
    id: 38,
    chapter: "機械学習の概要",
    stem: "ハイパーパラメータの例として正しいものはどれか？",
    choices: [
      "学習率や決定木の深さ",
      "入力データの値",
      "モデルの出力値",
      "学習に使うデータの数"
    ],
    answerIndex: 0,
    explanation: "ハイパーパラメータは、学習前に人が決める設定値（例：学習率や木の深さ）です。"
  },
  {
    id: 39,
    chapter: "ディープラーニングの手法",
    stem: "LSTMの特徴はどれか？",
    choices: [
      "長期的な情報を記憶しやすい",
      "画像認識専用の手法",
      "決定木の一種",
      "教師なし学習で使われる"
    ],
    answerIndex: 0,
    explanation: "LSTMは長い文章や時系列データの情報を記憶しやすいRNNの一種です。"
  },
  {
    id: 40,
    chapter: "ディープラーニングの応用",
    stem: "TF-IDFの主な用途はどれか？",
    choices: [
      "文章中で重要な単語を見つける",
      "単語のスペルミスを修正する",
      "文章の感情を判定する",
      "文章を単語に分ける"
    ],
    answerIndex: 0,
    explanation: "TF-IDFは、文章中で特に重要な単語を見つけるための指標です。"
  },
  {
    id: 41,
    chapter: "AIの社会実装に向けて",
    stem: "AIの雇用への影響として正しいものはどれか？",
    choices: [
      "すべての仕事がAIに置き換わる",
      "一部の仕事は自動化されるが新しい仕事も生まれる",
      "AIは雇用に全く影響しない",
      "AIは芸術分野にしか影響しない"
    ],
    answerIndex: 1,
    explanation: "AIの発展で一部の仕事は自動化されますが、新しい仕事も生まれると考えられています。"
  },
  {
    id: 42,
    chapter: "機械学習の概要",
    stem: "アンサンブル学習の利点はどれか？",
    choices: [
      "複数のモデルを組み合わせて精度を上げる",
      "1つのモデルだけを使う",
      "学習データを増やす",
      "計算コストを下げる"
    ],
    answerIndex: 0,
    explanation: "アンサンブル学習は複数のモデルを組み合わせて予測精度を高めます。"
  },
  {
    id: 43,
    chapter: "ディープラーニングの手法",
    stem: "GAN（敵対的生成ネットワーク）の特徴はどれか？",
    choices: [
      "画像や文章などを新しく作り出せる",
      "データを分類するだけの手法",
      "教師なし学習で使われることはない",
      "決定木の一種"
    ],
    answerIndex: 0,
    explanation: "GANは画像や文章など新しいデータを作り出すことができるAIの仕組みです。"
  },
  {
    id: 44,
    chapter: "ディープラーニングの応用",
    stem: "コーパスとは何か？",
    choices: [
      "大量の文章データの集まり",
      "単語の意味を記述した辞書",
      "音声データの集まり",
      "画像データの集まり"
    ],
    answerIndex: 0,
    explanation: "コーパスはAIの学習などに使われる大量の文章データのことです。"
  },
  {
    id: 45,
    chapter: "AI倫理・AIガバナンス",
    stem: "AIの意思決定の透明性が求められる理由はどれか？",
    choices: [
      "人がAIの判断理由を理解し納得できるようにするため",
      "AIの計算速度を上げるため",
      "AIのコストを下げるため",
      "AIの感情を理解するため"
    ],
    answerIndex: 0,
    explanation: "AIの判断理由が分かることで、人が納得しやすくなります。"
  },
  {
    id: 46,
    chapter: "機械学習の概要",
    stem: "特徴量選択の目的はどれか？",
    choices: [
      "重要な特徴だけを使ってモデルの精度を上げる",
      "データの量を増やす",
      "モデルのサイズを小さくする",
      "学習率を調整する"
    ],
    answerIndex: 0,
    explanation: "特徴量選択は、重要な特徴だけを使ってモデルの精度を上げるために行います。"
  },
  {
    id: 47,
    chapter: "ディープラーニングの手法",
    stem: "ドロップアウトの主な目的はどれか？",
    choices: [
      "過学習を防ぐため",
      "学習率を上げるため",
      "モデルのサイズを小さくするため",
      "データの前処理を簡単にするため"
    ],
    answerIndex: 0,
    explanation: "ドロップアウトは、学習中に一部のノードを無効化して過学習を防ぎます。"
  },
  {
    id: 48,
    chapter: "ディープラーニングの応用",
    stem: "Bag of Words（BoW）モデルの特徴はどれか？",
    choices: [
      "単語の出現回数だけを考慮する",
      "単語の順序を考慮する",
      "単語の意味的な関係を考慮する",
      "文章の感情を判定する"
    ],
    answerIndex: 0,
    explanation: "BoWモデルは単語の出現回数だけを使って文章を表現します。"
  },
  {
    id: 49,
    chapter: "AIの社会実装に向けて",
    stem: "AIの公平性が問題になる例はどれか？",
    choices: [
      "特定の属性の人だけが不利になる判断をAIがする場合",
      "AIが計算ミスをする場合",
      "AIが学習できない場合",
      "AIが高速に処理できる場合"
    ],
    answerIndex: 0,
    explanation: "AIが特定の属性の人だけを不利に扱うと公平性の問題になります。"
  },
  {
    id: 50,
    chapter: "機械学習の概要",
    stem: "グリッドサーチの目的はどれか？",
    choices: [
      "最適なハイパーパラメータを探すため",
      "データの量を増やすため",
      "モデルのサイズを小さくするため",
      "学習率を自動で調整するため"
    ],
    answerIndex: 0,
    explanation: "グリッドサーチは、色々な設定を試して一番良いハイパーパラメータを探す方法です。"
  },
  {
    id: 51,
    chapter: "AIに必要な数理・統計知識",
    stem: "平均二乗誤差（MSE）は何を評価するための指標か？",
    choices: [
      "分類モデルの正解率",
      "回帰モデルの予測誤差の大きさ",
      "クラスタリングのグループ分けの良さ",
      "強化学習モデルの獲得報酬"
    ],
    answerIndex: 1,
    explanation: "平均二乗誤差（Mean Squared Error）は、回帰モデルの予測値と実際の値の差の二乗の平均で、予測誤差の大きさを測る指標です。"
  },
  {
    id: 52,
    chapter: "AIに必要な数理・統計知識",
    stem: "勾配降下法において、学習率が大きすぎるとどうなる可能性があるか？",
    choices: [
      "局所最適解に収束しやすくなる",
      "学習が非常に遅くなる",
      "損失関数の値が発散してしまう",
      "必ず大域最適解に到達する"
    ],
    answerIndex: 2,
    explanation: "学習率が大きすぎると、最適解を通り過ぎてしまい、損失関数の値が増加して発散する可能性があります。"
  },
  {
    id: 53,
    chapter: "AIに関する法律と契約",
    stem: "学習済みモデルの著作権に関する記述として、最も適切なものはどれか？",
    choices: [
      "学習済みモデルは常に著作物として保護される",
      "学習済みモデルの生成に創作的な寄与があれば著作物となりうる",
      "学習データが著作物であればモデルも必ず著作物になる",
      "AIが生成したモデルは著作権の対象外である"
    ],
    answerIndex: 1,
    explanation: "学習済みモデル自体が著作物と認められるかはケースバイケースですが、その生成過程における人間の創作的な寄与が認められれば、著作物として保護される可能性があります。"
  },
  {
    id: 54,
    chapter: "AI倫理・AIガバナンス",
    stem: "AIにおける「アカウンタビリティ」とは何を意味するか？",
    choices: [
      "AIが常に正しい判断をすること",
      "AIの判断結果に対する説明責任",
      "AIシステムを誰でも利用できること",
      "AIの処理速度が速いこと"
    ],
    answerIndex: 1,
    explanation: "アカウンタビリティ（Accountability）は説明責任と訳され、AIの判断や行動の結果について、誰がどのように責任を負うのか、説明できるようにしておくことを意味します。"
  },
  {
    id: 55,
    chapter: "人工知能をめぐる動向",
    stem: "第二次AIブームで中心となった技術は何か？",
    choices: ["エキスパートシステム", "ディープラーニング", "探索と推論", "強化学習"],
    answerIndex: 0,
    explanation: "第二次AIブームでは、専門家の知識をルール化したエキスパートシステムが中心でした。"
  },
  {
    id: 56,
    chapter: "機械学習の概要",
    stem: "次元削減の目的として適切でないものはどれか？",
    choices: ["計算コストの削減", "過学習の抑制", "データの可視化", "予測精度の向上（常に）"],
    answerIndex: 3,
    explanation: "次元削減は予測精度向上に寄与することもありますが、情報が失われるため常に向上するとは限りません。"
  },
  {
    id: 57,
    chapter: "ディープラーニングの手法",
    stem: "RNNが抱える問題点で、LSTMやGRUが解決しようとしたものは何か？",
    choices: ["計算コストが高い", "勾配消失・勾配爆発問題", "過学習しやすい", "特徴量の自動抽出ができない"],
    answerIndex: 1,
    explanation: "RNNは長い時系列データを扱う際に勾配消失・勾配爆発問題が起こりやすく、LSTMやGRUはこれを軽減する仕組みを持ちます。"
  },
  {
    id: 58,
    chapter: "ディープラーニングの応用",
    stem: "自然言語処理における「感情分析」とはどのようなタスクか？",
    choices: ["文章のトピックを分類する", "文章が肯定的か否定的かなどを判定する", "文章を別の言語に翻訳する", "文章の要点を抽出する"],
    answerIndex: 1,
    explanation: "感情分析は、テキストデータから書き手の感情（肯定的、否定的、中立など）を判定するタスクです。"
  },
  {
    id: 59,
    chapter: "AIの社会実装に向けて",
    stem: "機械学習モデルの評価指標として、再現率（Recall）は何を示すか？",
    choices: ["予測が正と判定された中で、実際に正であった割合", "実際に正であるものの中で、正と予測された割合", "予測全体の中で、正しく予測できた割合", "予測が負と判定された中で、実際に負であった割合"],
    answerIndex: 1,
    explanation: "再現率（Recall）は、実際には陽性であるサンプルのうち、モデルが正しく陽性と予測できた割合を示します。見逃しを防ぎたい場合に重視されます。"
  },
  {
    id: 60,
    chapter: "AIに必要な数理・統計知識",
    stem: "標準偏差は何を表す統計量か？",
    choices: ["データの平均値", "データの中央値", "データのばらつきの大きさ", "データの最頻値"],
    answerIndex: 2,
    explanation: "標準偏差は、データが平均値からどれくらい散らばっているか、ばらつきの度合いを示す統計量です。"
  },
  {
    id: 61,
    chapter: "AIに関する法律と契約",
    stem: "営業秘密として保護される情報として適切でないものは？",
    choices: ["顧客リスト", "製造プロセス", "公知の技術情報", "販売計画"],
    answerIndex: 2,
    explanation: "公知の情報は営業秘密の対象外。"
  },
  {
    id: 62,
    chapter: "AI倫理・AIガバナンス",
    stem: "AIの「堅牢性（Robustness）」が意味することは？",
    choices: ["処理速度の速さ", "多様なデータへの対応力", "予期せぬ入力や攻撃への耐性", "モデルの解釈可能性"],
    answerIndex: 2,
    explanation: "ノイズや攻撃に対し安定して動作する能力。"
  },
  {
    id: 64,
    chapter: "機械学習の概要",
    stem: "クラスタリングは何を目的とした手法か？",
    choices: ["数値予測", "グループ分け", "異常検知", "特徴量抽出"],
    answerIndex: 1,
    explanation: "類似したデータを集めてグループを作る。"
  },
  {
    id: 65,
    chapter: "ディープラーニングの手法",
    stem: "ResNetで導入された、勾配消失問題を緩和する技術は？",
    choices: ["ドロップアウト", "バッチ正規化", "残差接続（スキップ接続）", "データ拡張"],
    answerIndex: 2,
    explanation: "層を飛び越えて情報を伝える接続。"
  },
  {
    id: 66,
    chapter: "ディープラーニングの応用",
    stem: "GANの「生成器」は何をするネットワークか？",
    choices: ["本物か偽物かを見分ける", "データの特徴量を抽出する", "新しいデータを生成する", "損失を計算する"],
    answerIndex: 2,
    explanation: "識別器を騙すような偽データを生成。"
  },
  {
    id: 67,
    chapter: "AIの社会実装に向けて",
    stem: "混同行列（Confusion Matrix）は何のために使われるか？",
    choices: ["回帰モデルの評価", "分類モデルの性能評価", "強化学習の報酬設計", "データの次元削減"],
    answerIndex: 1,
    explanation: "分類結果を正解・不正解のパターンで示す表。"
  },
  {
    id: 68,
    chapter: "AIに必要な数理・統計知識",
    stem: "ベクトルや行列の演算を扱う数学分野は？",
    choices: ["微分積分学", "確率論", "線形代数", "統計学"],
    answerIndex: 2,
    explanation: "大量のデータを効率的に扱うための数学。"
  },
  {
    id: 69,
    chapter: "AIに関する法律と契約",
    stem: "個人情報保護法における「要配慮個人情報」に該当しないものは？",
    choices: ["人種", "信条", "病歴", "氏名"],
    answerIndex: 3,
    explanation: "氏名は通常の個人情報。"
  },
  {
    id: 70,
    chapter: "AI倫理・AIガバナンス",
    stem: "AI開発における「サンドボックス」の主な目的は？",
    choices: ["本番環境でのテスト", "安全な隔離環境での実験", "開発者間の情報共有", "ソースコードのバージョン管理"],
    answerIndex: 1,
    explanation: "影響範囲を限定して試行錯誤する環境。"
  },
  {
    id: 71,
    chapter: "人工知能をめぐる動向",
    stem: "ムーアの法則が示す傾向は？",
    choices: ["AIの賢さの向上速度", "データ量の増加速度", "半導体の集積密度の向上速度", "インターネットの普及速度"],
    answerIndex: 2,
    explanation: "コンピューターの性能向上を支えた経験則。"
  },
  {
    id: 72,
    chapter: "機械学習の概要",
    stem: "ロジスティック回帰は何に使われる手法か？",
    choices: ["連続値の予測", "2値分類", "クラスタリング", "次元削減"],
    answerIndex: 1,
    explanation: "確率を出力し、分類問題に用いられる。"
  },
  {
    id: 73,
    chapter: "ディープラーニングの手法",
    stem: "最適化アルゴリズムAdamの特徴は？",
    choices: ["学習率が常に一定", "勾配の大きさに応じて学習率を調整", "モメンタムのみを利用", "正則化の一種"],
    answerIndex: 1,
    explanation: "効率的な学習率調整を行う代表的な手法。"
  },
  {
    id: 74,
    chapter: "ディープラーニングの応用",
    stem: "機械翻訳で用いられる評価指標BLEUは何を測るか？",
    choices: ["翻訳の速度", "翻訳の流暢さ", "翻訳結果と参照訳との類似度", "翻訳モデルのサイズ"],
    answerIndex: 2,
    explanation: "機械翻訳の精度評価指標の一つ。"
  },
  {
    id: 75,
    chapter: "AIの社会実装に向けて",
    stem: "モデルの評価指標「適合率（Precision）」が重視されるのはどんな場合か？",
    choices: ["陽性と予測したものが本当に陽性であってほしい場合", "陽性のものを見逃したくない場合", "陰性と予測したものが本当に陰性であってほしい場合", "陰性のものを見逃したくない場合"],
    answerIndex: 0,
    explanation: "迷惑メールフィルタなど、誤判定のコストが高い場合。"
  },
  {
    id: 76,
    chapter: "AIに必要な数理・統計知識",
    stem: "条件付き確率 P(A|B) は何を意味するか？",
    choices: ["AとBが同時に起こる確率", "AまたはBが起こる確率", "事象Bが起こったという条件下で事象Aが起こる確率", "事象Aが起こったという条件下で事象Bが起こる確率"],
    answerIndex: 2,
    explanation: "ベイズの定理などで使われる基本的な概念。"
  },
  {
    id: 77,
    chapter: "AIに関する法律と契約",
    stem: "著作権の保護期間は原則として著作者の死後何年か？",
    choices: ["20年", "50年", "70年", "永久"],
    answerIndex: 2,
    explanation: "TPP関連法改正により70年に延長された。"
  },
  {
    id: 78,
    chapter: "AI倫理・AIガバナンス",
    stem: "「AI原則」に含まれることが多い項目として不適切なものは？",
    choices: ["人間の尊厳・自律性", "公平性・無差別", "透明性・説明可能性", "利益の最大化"],
    answerIndex: 3,
    explanation: "利益追求よりも倫理的配慮が優先される。"
  },
  {
    id: 79,
    chapter: "人工知能をめぐる動向",
    stem: "IBMが開発し、クイズ番組で人間に勝利したAIは？",
    choices: ["Deep Blue", "AlphaGo", "Watson", "Siri"],
    answerIndex: 2,
    explanation: "自然言語処理と知識ベースを活用したAI。"
  },
  {
    id: 82,
    chapter: "ディープラーニングの応用",
    stem: "単語をベクトル化する際、文脈を考慮するモデルは？",
    choices: ["Bag of Words", "TF-IDF", "Word2Vec(CBOW/Skip-gram)", "BERT"],
    answerIndex: 3,
    explanation: "BERTは文脈に応じて単語のベクトル表現が変わる。"
  },
  {
    id: 83,
    chapter: "AIの社会実装に向けて",
    stem: "モデルの性能評価で用いる「F値」とは何か？",
    choices: ["正解率と再現率の平均", "適合率と再現率の調和平均", "適合率と正解率の加重平均", "再現率のみを考慮した指標"],
    answerIndex: 1,
    explanation: "適合率と再現率のバランスをとった指標。"
  },
  {
    id: 84,
    chapter: "AIに必要な数理・統計知識",
    stem: "複数の変数間の関連性の強さを示す統計量は？",
    choices: ["平均", "分散", "相関係数", "最頻値"],
    answerIndex: 2,
    explanation: "-1から1の値をとり、関連の度合いを示す。"
  },
  {
    id: 86,
    chapter: "AI倫理・AIガバナンス",
    stem: "AIによる差別を防ぐためのアプローチとして適切でないものは？",
    choices: ["バイアスのあるデータの修正", "多様なデータセットの利用", "アルゴリズムの公平性評価", "性能向上のためならバイアスを許容"],
    answerIndex: 3,
    explanation: "性能と公平性は両立を目指すべき。"
  },
  {
    id: 88,
    chapter: "機械学習の概要",
    stem: "異常検知は主にどの学習方法に分類されるか？",
    choices: ["教師あり学習", "教師なし学習", "強化学習", "半教師あり学習"],
    answerIndex: 1,
    explanation: "正常データから逸脱するパターンを見つける。"
  },
  {
    id: 89,
    chapter: "ディープラーニングの手法",
    stem: "学習中にランダムにニューロンを無効化する正則化手法は？",
    choices: ["L1正則化", "L2正則化", "ドロップアウト", "早期終了"],
    answerIndex: 2,
    explanation: "過学習を抑制する代表的な手法。"
  },
  {
    id: 90,
    chapter: "ディープラーニングの応用",
    stem: "音声認識システムの主な処理フローは？",
    choices: ["音響特徴抽出 → 音響モデル → 言語モデル", "言語モデル → 音響モデル → テキスト生成", "テキスト入力 → 音声合成 → 音声出力", "感情分析 → 話者認識 → 文字起こし"],
    answerIndex: 0,
    explanation: "音声信号からテキストへの変換プロセス。"
  },
  {
    id: 91,
    chapter: "AIの社会実装に向けて",
    stem: "A/Bテストは何を比較するために行われるか？",
    choices: ["異なるモデルの学習時間", "異なるバージョンのサービスや機能の効果", "異なるデータセットの品質", "異なる開発者のスキル"],
    answerIndex: 1,
    explanation: "どちらの案がより良い結果を生むかを検証。"
  },
  {
    id: 92,
    chapter: "AIに必要な数理・統計知識",
    stem: "確率分布とは何か？",
    choices: ["特定の事象が起こる確率", "確率変数がとりうる値とその確率の関係", "データの平均値と分散", "複数の確率変数の相関"],
    answerIndex: 1,
    explanation: "確率変数がどの値をどれくらいの確率でとるかを示す。"
  },
  {
    id: 93,
    chapter: "AIに関する法律と契約",
    stem: "AIシステムの欠陥により損害が発生した場合に関係する法律は？",
    choices: ["著作権法", "労働基準法", "製造物責任法（PL法）", "独占禁止法"],
    answerIndex: 2,
    explanation: "製品の欠陥による損害賠償責任を定める。"
  },
  {
    id: 94,
    chapter: "AI倫理・AIガバナンス",
    stem: "プライバシー保護強化の観点から注目される技術は？",
    choices: ["ブロックチェーン", "量子コンピュータ", "連合学習", "クラウドコンピューティング"],
    answerIndex: 2,
    explanation: "データを集約せずに分散したまま学習する技術。"
  },
  {
    id: 97,
    chapter: "ディープラーニングの手法",
    stem: "オートエンコーダの主な目的は？",
    choices: ["画像分類", "時系列予測", "次元削減・特徴抽出", "強化学習の方策決定"],
    answerIndex: 2,
    explanation: "入力データを圧縮し、再び復元することで特徴を学習。"
  },
  {
    id: 98,
    chapter: "ディープラーニングの応用",
    stem: "コンピュータが人間のように対話するシステムは？",
    choices: ["機械翻訳システム", "要約システム", "チャットボット（対話システム）", "音声認識システム"],
    answerIndex: 2,
    explanation: "顧客対応や情報提供などに利用される。"
  },
  {
    id: 99,
    chapter: "AIの社会実装に向けて",
    stem: "機械学習プロジェクトの一般的な流れとして、最初に行うべきことは？",
    choices: ["モデルの選択", "データの収集", "課題設定・目標定義", "特徴量エンジニアリング"],
    answerIndex: 2,
    explanation: "何を解決したいのかを明確にすることが最も重要。"
  },
  {
    id: 100,
    chapter: "AI倫理・AIガバナンス",
    stem: "AIシステムのリスク管理において重要な考え方は？",
    choices: ["リスクの完全な排除", "リスクの特定、評価、対応", "リスクの無視", "リスクの責任転嫁"],
    answerIndex: 1,
    explanation: "リスクを認識し、適切に管理・対応することが求められる。"
  },
  // --- ここから追加する8問 ---
  {
    id: 101,
    chapter: "ディープラーニングの概要",
    stem: "ニューラルネットワークの基本的な構成要素でないものはどれか？",
    choices: [
      "入力層",
      "隠れ層（中間層）",
      "出力層",
      "決定木"
    ],
    answerIndex: 3,
    explanation: "決定木はニューラルネットワークとは異なる機械学習モデルです。ニューラルネットワークは入力層、隠れ層、出力層から構成されます。"
  },
  {
    id: 102,
    chapter: "ディープラーニングの概要",
    stem: "ニューラルネットワークにおいて、入力信号の重み付き和を次の層に伝えるかどうかを決定する関数は何か？",
    choices: [
      "損失関数",
      "活性化関数",
      "最適化関数",
      "評価関数"
    ],
    answerIndex: 1,
    explanation: "活性化関数は、ニューロンの発火を模擬し、非線形性を導入する役割を持ちます。代表例にシグモイド関数やReLUがあります。"
  },
  {
    id: 103,
    chapter: "ディープラーニングの概要",
    stem: "ニューラルネットワークの学習において、モデルの予測と正解との誤差を測るために用いられる関数は何か？",
    choices: [
      "活性化関数",
      "評価関数",
      "損失関数（誤差関数）",
      "正則化関数"
    ],
    answerIndex: 2,
    explanation: "損失関数（誤差関数）は、モデルの出力と正解データとのズレを定量化します。学習はこの損失を最小化するように進められます。平均二乗誤差や交差エントロピー誤差などが用いられます。"
  },
  {
    id: 104,
    chapter: "ディープラーニングの概要",
    stem: "ニューラルネットワークの学習パラメータ（重みやバイアス）を、損失関数を最小化するように更新していく手法の総称は何か？",
    choices: [
      "次元削減",
      "クラスタリング",
      "最適化手法（アルゴリズム）",
      "アンサンブル学習"
    ],
    answerIndex: 2,
    explanation: "最適化手法（アルゴリズム）は、損失関数の勾配などの情報を用いて、パラメータを効率的に更新します。代表例に勾配降下法やAdamがあります。"
  },
  {
    id: 105,
    chapter: "ディープラーニングの概要",
    stem: "ニューラルネットワークの学習において、学習データに過剰に適合してしまい、未知のデータに対する予測性能が低下してしまう現象を何と呼ぶか。",
    choices: [
      "勾配消失",
      "未学習 (Underfitting)",
      "過学習 (Overfitting)",
      "正則化"
    ],
    answerIndex: 2,
    explanation: "過学習は、モデルが学習データのノイズや詳細まで学習しすぎてしまい、汎化性能を失う現象です。正則化やドロップアウトなどのテクニックで抑制します。"
  },
  {
    id: 106,
    chapter: "ディープラーニングの概要", // 元は機械学習の具体的手法だったが変更
    stem: "ディープラーニングの学習で、損失関数の値を最小にするためにパラメータを更新する基本的なアルゴリズムは？",
    choices: [
      "k-means法",
      "決定木",
      "勾配降下法",
      "サポートベクターマシン"
    ],
    answerIndex: 2,
    explanation: "勾配降下法は、損失関数の勾配（傾き）を利用して、損失が小さくなる方向にパラメータを少しずつ更新していく最適化アルゴリズムの基本です。"
  },
  {
    id: 107,
    chapter: "ディープラーニングの概要", // 元はAIの社会実装に向けてだったが変更
    stem: "ニューラルネットワークの学習において、出力層での誤差を入力層に向かって逆方向に伝播させ、各層の重みを更新する手法は何か？",
    choices: [
      "順伝播 (Forward Propagation)",
      "誤差逆伝播法 (Backpropagation)",
      "活性化関数",
      "プーリング"
    ],
    answerIndex: 1,
    explanation: "誤差逆伝播法は、出力層での誤差を計算し、それを微分（勾配）として逆方向に伝えることで、各層の重みが誤差を減らすためにどれだけ貢献したかを計算し、重みを効率的に更新する手法です。"
   },
   {
    id: 108,
    chapter: "ディープラーニングの概要", // 元はAI倫理・AIガバナンスだったが変更
    stem: "多数の層（深い層）を持つニューラルネットワークを用いた機械学習の手法を総称して何と呼ぶか？",
    choices: [
      "強化学習",
      "教師なし学習",
      "ディープラーニング（深層学習）",
      "アンサンブル学習"
    ],
    answerIndex: 2,
    explanation: "ディープラーニング（深層学習）は、深い（多層の）ニューラルネットワークを用いることで、データから複雑なパターンや特徴を自動的に学習する機械学習の一分野です。"
  }
  // --- 追加ここまで ---
];