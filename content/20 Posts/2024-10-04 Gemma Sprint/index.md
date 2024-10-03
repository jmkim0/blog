---
tags:
  - AI
  - LLM
  - Gemma
  - MLX
  - LangChain
  - GemmaSprint
---
# Gemma 2를 활용한 Read-it-later 목록 항목 요약하기

**Google for Developers Machine Learning Bootcamp 2024** 프로그램에 참가하면서 **Gemma**를 활용한 프로젝트, **Gemma Sprint**를 진행했다. 평소에 관심 있는 최신 논문, 블로그 포스트, 뉴스 등을 스크랩해서 PDF 문서 파일이나 HTML 스냅샷 파일과 함께 Read-it-later 목록을 저장해두고 있었는데 제목만 봐서는 내용을 바로 파악하기 힘든 경우가 있었다. 그렇다고 매번 직접 훑어보기도 힘들어서 LLM을 사용하여 각 항목의 요약을 만들면 좋겠다는 생각이 들어서 여기에 **Gemma 2**를 활용해보기로 했다. *#GemmaSprint*

<!-- truncate -->

## Gemma 2 2B Instruction-tuned Model

이번 Gemma Sprint에서는 로컬 환경에서 사용할 수 있는 비교적 작은 크기의 오픈 모델인 **Gemma 2 2B** 모델을 사용했다. 별도의 fine-tuning, instruction-tuning을 하지 않고 Google이 제공하는 **instruction-tuned** model을 활용하기로 했다. [**Hugging Face**에서](https://huggingface.co/google/gemma-2-2b-it) model card를 확인할 수 있고 model weight와 tokenizer도 쉽게 다운로드받을 수 있다.

## [MLX](https://github.com/ml-explore/mlx)

앞서 말했듯 Gemma 2 2B 모델은 로컬환경에서 사용할 수 있을 만큼 크기가 작다. 내가 현재 주로 사용하는 개발 환경인 M1 MacBook Air에서도 충분히 실행가능한 크기다. 다만 Apple silicon을 사용하기 때문에 주로 많이 사용되는 Nvidia GPU의  CUDA를 사용할 수가 없다. 그렇기 때문에 TensorFlow, PyTorch, JAX 같이 주로 사용되는 ML 프레임워크를 사용할 때 다소 성능이 아쉽지만 CPU 상에서 연산하도록 하거나 GPU를 활용하기 위해 추가적인 설정이 필요하다.

이런 번거로움에서 쉽게 벗어날 수 있는 방법이 바로 **MLX**다. MLX는 작년 말 Apple에서 출시한 Apple silicon용 ML 프레임워크다. Apple에서 직접 만든 프레임워크인 만큼 Apple silicon의 CPU, GPU에 최적화되어있어 별 다른 설정없이 좋은 성능을 기대할 수 있다. [Hugging Face에서](https://huggingface.co/mlx-community/quantized-gemma-2b-it) MLX 포맷으로 변경된 Gemma 2 2B 모델의 weight, tokenizer를 확인, 다운로드할 수 있다.

## [LangChain](https://github.com/langchain-ai/langchain)

MLX를 활용하면 모델에 프롬프트를 입력하고 모델이 응답이 출력하게 하는 데까지는 간단하게 구현할 수 있다. 하지만 PDF, HTML 등을 불러와서 적당한 프롬프트와 함께 입력해서 모델이 그럴듯한 요약을 출력할 수 있게 하는 하나의 앱을 구현하는 것은 상당히 번거로울 수 있다. 이 과정을 좀 더 편하게 할 수 있게 해주는 프레임워크 **LangChain**이다.

LangChain의 다양한 서드파티 통합 기능을 활용하면 [MLX을 LLM agent로 연결](https://python.langchain.com/docs/integrations/chat/mlx/)하고 [PDF](https://python.langchain.com/docs/how_to/document_loader_pdf/), [HTML](https://python.langchain.com/docs/how_to/document_loader_web/)을 문서로 불러오는 과정을 쉽게 할 수 처리할 수 있다. [**LangGraph**](https://github.com/langchain-ai/langgraph) 라이브러리와 함께 사용하면 크기가 큰 문서를 모델이 처리할 수 있는 크기로 분리한 후 요약하고 다시 하나의 요약으로 합치는 과정도 그래프화해서 구현할 수 있다[^1].

## Implementation

기본적으로 원하는 동작은 Python 스크립트에 인수로 PDF나 HTML 파일의 경로를 입력하면 이를 요약해서 출력해주는 것이다. 원래는 현재 Read-it-later 목록을 관리하기 위해 사용 중인 Zotero와 통합시켜서 일괄적으로 읽어서 요약시키는 과정까지도 구현해보려고 했으나 일단 위에 설명한 기본적인 기능만 구현하면 따로 추가적인 스크립트를 작성해서 실행시켜도 되는 부분이라서 일단은 기본적인 동작까지만 구현하는 것으로 생각하고 진행했다.

자세한 코드는 [이 프로젝트의 GitHub repository](https://github.com/jmkim0/ril-summarizer)에서 확인할 수 있다.

## Examples

### PDF 요약

최근에 스크랩한 [Secure by Design at Google](https://research.google/pubs/secure-by-design-at-google/) 논문을 요약해보았다.

#### CLI 출력

```bash
$ python ril_summarizer.py "Kern - Secure by Design at Google.pdf"
Generated 8 documents.
None of PyTorch, TensorFlow >= 2.0, or Flax have been found. Models won't be available and only tokenizers, configuration and file/data utilities can be used.
Fetching 7 files: 100%|████████████████████████████████████████████████████████████████| 7/7 [00:00<00:00, 78713.48it/s]
['generate_summary']
['generate_summary']
['generate_summary']
['generate_summary']
['generate_summary']
['generate_summary']
['generate_summary']
['generate_summary']
/Users/jmkim/Projects/ril-summarizer/venv/lib/python3.12/site-packages/transformers/tokenization_utils_base.py:1617: FutureWarning: `clean_up_tokenization_spaces` was not set. It will be set to `True` by default. This behavior will be deprecated in transformers v4.45, and will be then set to `False` by default. For more details check this issue: https://github.com/huggingface/transformers/issues/31884
  warnings.warn(
['collect_summaries']
['collapse_summaries']
['collapse_summaries']
['generate_final_summary']
# 이후 최종 요약 출력
```

#### 최종 요약 출력

> **Main Themes:**
> 
> - Design thinking and security are essential for software development.
> - Prevention of vulnerabilities is crucial to ensure software security.
> - Security design principles should be prioritized from the outset.
> - Memory safety, secure design principles, and vulnerability prevention are important considerations.
> - Thorough testing and code review are crucial for ensuring security.
> - Developers have a responsibility to prioritize security throughout the development process.

어떤 내용을 담고 있는 지는 확인할 수 있을 정도로 정제된 요약을 보여주고 있음을 확인할 수 있다.

### HTML 요약

최근의 스크랩한 Reuters의 뉴스 기사 [If your AI seems smarter​, it's thanks to smarter human trainers](https://www.reuters.com/technology/artificial-intelligence/if-your-ai-seems-smarter-its-thanks-smarter-human-trainers-2024-09-28/)를 요약해보았다.

#### CLI 출력

```bash
$ python ril_summarizer.py "/Users/jmkim/Zotero/storage/LHISV6V9/if-your-ai-seems-smarter-its-thanks-smarter-human-trainers-2024-09-28.html"
Generated 2 documents.
None of PyTorch, TensorFlow >= 2.0, or Flax have been found. Models won't be available and only tokenizers, configuration and file/data utilities can be used.
Fetching 7 files: 100%|████████████████████████████████████████████████████████████████| 7/7 [00:00<00:00, 84368.18it/s]
['generate_summary']
['generate_summary']
/Users/jmkim/Projects/ril-summarizer/venv/lib/python3.12/site-packages/transformers/tokenization_utils_base.py:1617: FutureWarning: `clean_up_tokenization_spaces` was not set. It will be set to `True` by default. This behavior will be deprecated in transformers v4.45, and will be then set to `False` by default. For more details check this issue: https://github.com/huggingface/transformers/issues/31884
  warnings.warn(
['collect_summaries']
['generate_final_summary']

```

#### 최종 요약 출력

> Sure, here's a final summary of the main themes:
> 
> - Human trainers play a crucial role in shaping the intelligence of artificial intelligence (AI) models by providing human feedback and specialized knowledge.
> 
> 
> - AI often requires superior training and specialized knowledge to create accurate and reliable AI models.
> 
> 
> - Invisible Tech, a startup specializing in AI training, employs thousands of trainers worldwide to provide human feedback to AI models.
> 
> 
> - As AI models become more advanced, the demand for specialized trainers and across dozens of languages is on the rise.

출력 형식이 살짝 달라졌지만 그럴듯한 요약을 만들어주는 것을 확인할 수 있다.

## 결론

Gemma 2 2B 모델을 활용하여 PDF, HTML 문서를 요약하는 Python 스크립트를 만들어본 결과 상당히 그럴듯한 결과물을 얻을 수 있었다. MLX 포맷 기준 2 GB를 좀 넘는 크기의 작은 모델로 로컬 환경에서 추론한 것임을 감안하면 대단히 만족스럽다. 다만 페이지가 많은 문서에도 시험해본 결과 실행 시간이 상당히 길어지는 것을 확인할 수 있어서 긴 논문의 경우 차라리 Abstract만 추출해서 요약하는 등 문서의 종류에 따라 적절한 동작을 할 수 있게 하면 좋을 것 같다.

일반적인 동작을 할 수 있게 instruction-tuning된 모델을 사용해서 개발 과정이 간소해지긴 했지만 출력 형식이 일정하지 않는 등 무작위성이 드러나기도 했다. 이부분을 base 모델을 요약 기능 전용으로 fine-tuning 함으로써 개선할 수 있을지 궁금하기도 한데 사실상 현재 구현으로도 원래 의도했던 훑어보는 용도의 요약은 잘 만들어주고 있는 것 같아서 오버엔지니어링이 아닐까 싶다.

점점 기술이 발전하면서 LLM 자체의 크기도 커지고 그 성능도 대단해지고 있지만 Gemma 2 2B처럼 효율이 좋고 작은 LLM도 오픈 모델로 나오고 있다. API에 비용을 지불하고 활용할 수도 있지만 로컬에서 활용할 수 있는 작고 효율적인 오픈 모델의 활용도 익혀두면 작업의 특성에 따라 다르게 활용한다는 선택지도 가져갈 수 있어 좋을 것 같다. 물론 선택지 간의 결정에는 API 사용료와 엔지니어링 비용의 trade-off도 고려해야겠지만 말이다.

[^1]: [Summarize Text | LangChain](https://python.langchain.com/docs/tutorials/summarization/)
