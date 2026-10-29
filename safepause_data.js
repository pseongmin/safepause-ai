window.SAFEPAUSE_DATA = {
  "project_title": "세이프포즈 AI (SafePause AI)",
  "idea_ref": "11번. 지원의사결정 기반 발달장애인 경제적 애로 예방 AI 모니터링 서비스",
  "dataset_summary": {
    "total_transactions": 2400,
    "normal_transactions": 2040,
    "exploitation_transactions": 360,
    "virtual_cohort_users": 120,
    "exploitation_archetypes": 6,
    "validation_method": "5-Fold Stratified Cross-Validation (Out-of-Fold 정량 검증)",
    "grounding_sources": [
      "보건복지부·중앙장애인권익옹호기관, 『2024 장애인학대 현황보고서』 (전체 학대 1,449건 중 발달장애인 71.1%, 경제적 착취 18.6%·384건)",
      "보건복지부, 『발달장애인 실태조사』 (일상 주요 의사결정 본인 수행 비율 28.6%, 등록 발달장애인 약 27만 명)",
      "금융보안원·금융결제원, 금융 분야 마이데이터(MyData) 표준 API 규격 (계좌·카드·통신·대출 거래내역 스키마)",
      "UN 장애인권리협약(CRPD) 제12조 및 「발달장애인 권리보장 및 지원에 관한 법률」 제8조(자기결정권의 보장)"
    ]
  },
  "models_comparison": [
    {
      "model_name": "기존 은행 FDS (보이스피싱 고액·해외 룰)",
      "accuracy": 88.96,
      "precision": 100.0,
      "recall": 26.39,
      "f1": 41.76,
      "roc_auc": 63.19,
      "fpr": 0.0,
      "tp": 95,
      "fp": 0,
      "tn": 2040,
      "fn": 265
    },
    {
      "model_name": "단독 규칙 필터 (6대 착취 조건)",
      "accuracy": 95.67,
      "precision": 88.55,
      "recall": 81.67,
      "f1": 84.97,
      "roc_auc": 90.24,
      "fpr": 1.86,
      "tp": 294,
      "fp": 38,
      "tn": 2002,
      "fn": 66
    },
    {
      "model_name": "기존 비지도 이상탐지 모델 (비교군)",
      "accuracy": 97.08,
      "precision": 87.76,
      "recall": 93.61,
      "f1": 90.59,
      "roc_auc": 99.12,
      "fpr": 2.3,
      "tp": 337,
      "fp": 47,
      "tn": 1993,
      "fn": 23
    },
    {
      "model_name": "SafePause AI (복합 이상탐지 · 안전 라우팅)",
      "accuracy": 98.08,
      "precision": 94.86,
      "recall": 92.22,
      "f1": 93.52,
      "roc_auc": 99.61,
      "fpr": 0.88,
      "tp": 332,
      "fp": 18,
      "tn": 2022,
      "fn": 28
    }
  ],
  "per_archetype_recall": [
    {
      "archetype_code": "EXPLOIT_1_NIGHT_GROOMING",
      "archetype_name": "유형① 지인·온라인 그루밍 심야·반복 송금 갈취",
      "sample_count": 60,
      "legacy_fds_recall_pct": 28.3,
      "rule_only_recall_pct": 80.0,
      "safepause_hybrid_recall_pct": 91.7
    },
    {
      "archetype_code": "EXPLOIT_2_TELECOM_OPENING",
      "archetype_name": "유형② 휴대폰 다회선 개통(내구제) 및 소액결제 착취",
      "sample_count": 60,
      "legacy_fds_recall_pct": 0.0,
      "rule_only_recall_pct": 75.0,
      "safepause_hybrid_recall_pct": 91.7
    },
    {
      "archetype_code": "EXPLOIT_3_PENSION_INTERCEPT",
      "archetype_name": "유형③ 급여·장애인연금 입금 직후 일괄 편취",
      "sample_count": 60,
      "legacy_fds_recall_pct": 1.7,
      "rule_only_recall_pct": 85.0,
      "safepause_hybrid_recall_pct": 98.3
    },
    {
      "archetype_code": "EXPLOIT_4_CASHABLE_GOODS",
      "archetype_name": "유형④ 상품권·귀금속·고가 전자기기 대리결제 강요",
      "sample_count": 60,
      "legacy_fds_recall_pct": 33.3,
      "rule_only_recall_pct": 81.7,
      "safepause_hybrid_recall_pct": 85.0
    },
    {
      "archetype_code": "EXPLOIT_5_SUPPORTER_CONFLICT",
      "archetype_name": "유형⑤ 조력자(활동지원사·친족 등) 이해상충 사적 이체",
      "sample_count": 60,
      "legacy_fds_recall_pct": 3.3,
      "rule_only_recall_pct": 80.0,
      "safepause_hybrid_recall_pct": 86.7
    },
    {
      "archetype_code": "EXPLOIT_6_PROXY_LOAN",
      "archetype_name": "유형⑥ 명의도용 비대면 카드론·소액대출 실행 후 이체",
      "sample_count": 60,
      "legacy_fds_recall_pct": 91.7,
      "rule_only_recall_pct": 88.3,
      "safepause_hybrid_recall_pct": 100.0
    }
  ],
  "conflict_of_interest_verification": {
    "total_conflict_exploitation_cases": 60,
    "supporter_match_detected": 60,
    "conflicted_supporter_alert_blocked_rate_pct": 100.0,
    "fallback_routing_success_rate_pct": 100.0
  },
  "interactive_scenarios": [
    {
      "id": "SCEN_01_SUPPORTER_CONFLICT",
      "badge": "핵심 실증 #1 · Q&A 2번 반영 (조력자 이해상충)",
      "title": "지정 조력자(활동지원사·지인) 계좌로의 반복 송금 및 이해상충 우회 라우팅",
      "archetype": "유형⑤ 조력자 이해상충 사적 이체",
      "user_profile": {
        "name": "김민준 (26세, 지적장애 3급, 자립생활 2년차)",
        "monthly_income": "장애인연금 및 보호작업장 급여 월 142만 원",
        "primary_supporter": {
          "name": "박OO (활동지원사)",
          "role": "1차 지정 조력자",
          "phone": "010-8821-XXXX",
          "account": "신한 110-492-XXXXXX"
        },
        "secondary_supporter": {
          "name": "김OO (누나 / 가족)",
          "role": "2차 지정 조력자",
          "phone": "010-3319-XXXX"
        },
        "public_center": "서울시발달장애인지원센터 권익옹호팀 (02-2135-3635)"
      },
      "transaction": {
        "tx_id": "TX-2026-1031-01",
        "timestamp": "2026-10-31 21:15",
        "type": "모바일 뱅킹 계좌이체",
        "counterparty_name": "박OO",
        "counterparty_account": "신한 110-492-XXXXXX",
        "amount_krw": 650000,
        "balance_before_krw": 780000,
        "balance_after_krw": 130000,
        "memo": "공동 생활비 보관 명목"
      },
      "ai_analysis": {
        "hybrid_risk_score": 94.2,
        "risk_level": "CRITICAL (고위험 착취 의심)",
        "rule_triggers": [
          "지정 1차 조력자 계좌 수취(이해상충) 징후",
          "연금급여 입금직후 일괄유출"
        ],
        "conflict_detected": true,
        "conflict_reason": "수취인 계좌(박OO, 신한 110-492-***)가 당사자의 1차 지정 조력자(박OO 활동지원사) 정보와 100% 일치함",
        "routing_decision": "1차 조력자(박OO) 알림 자동 차단(가해 의심자 통보 배제) → 2차 조력자(김OO 가족) 및 서울시발달장애인지원센터로 긴급 우회 알림 발송",
        "feature_contributions": [
          {
            "feature": "지정 조력자 수취 계좌 일치",
            "impact": "핵심 위험 징후",
            "detail": "수취인=1차 조력자 동일인 감지",
            "bar_pct": 88
          },
          {
            "feature": "계좌 잔액 대비 출금 비율 (83.3%)",
            "impact": "주요 주의 징후",
            "detail": "이번 달 생활비의 83%가 한 번에 빠져나감",
            "bar_pct": 64
          },
          {
            "feature": "최근 7일 특정 수취인 편중도 (78.0%)",
            "impact": "주요 주의 징후",
            "detail": "최근 2주간 3회 연속 동일 계좌 송금",
            "bar_pct": 64
          },
          {
            "feature": "평소 결제액 대비 배수 (Z=+3.8σ)",
            "impact": "주요 주의 징후",
            "detail": "평소 1회 평균 지출(18,000원)의 36배",
            "bar_pct": 64
          }
        ]
      },
      "easy_read_card": {
        "headline": "잠깐만요! 큰돈(65만 원)을 보내기 전에 함께 확인해요",
        "pictogram_type": "SHIELD_PAUSE",
        "easy_sentences": [
          "지금 박OO 님에게 65만 원을 보내려고 해요.",
          "이 돈을 보내면 내 통장에 13만 원만 남아서 이번 달 식비와 월세가 부족할 수 있어요.",
          "도와주는 선생님이나 아는 사람이라도 내 돈은 내가 직접 결정해야 해요."
        ],
        "self_check_questions": [
          "내가 정말로 주고 싶어서 스스로 누른 돈인가요?",
          "다른 사람이 '대신 보관해 줄게' 또는 '비밀로 해'라고 말했나요?",
          "이 돈을 보내도 이번 달 생활비(밥값·교통비)가 충분한가요?"
        ],
        "tts_script": "민준 님, 잠깐만요! 지금 박OO 님에게 육십오만 원을 보내려고 해요. 이 돈을 보내면 통장에 십삼만 원만 남아요. 누군가 대신 보관해 준다고 했거나 비밀로 하라고 했다면, 보내지 말고 도움 요청 버튼을 눌러주세요. 내가 직접 확인하고 정말 보내고 싶다면 계속 진행할 수 있어요.",
        "self_determination_note": "「발달장애인법」 제8조에 따라 거래를 강제로 막지 않으며, 당사자가 3가지 질문을 확인한 뒤 스스로 [보내기] 또는 [취소하고 상담하기]를 결정합니다."
      }
    },
    {
      "id": "SCEN_02_TELECOM_FRAUD",
      "badge": "핵심 실증 #2 · 다회선 휴대폰 개통(내구제) 및 소액결제 착취",
      "title": "단기간 다회선 이동통신 개통 청구 및 모바일 상품권 소액결제 한도 소진",
      "archetype": "유형② 휴대폰 다회선 개통(내구제) 및 소액결제 착취",
      "user_profile": {
        "name": "이서연 (23세, 지적장애 2급)",
        "monthly_income": "장애인연금 및 시간제 일자리 월 115만 원",
        "primary_supporter": {
          "name": "이OO (어머니)",
          "role": "1차 지정 조력자",
          "phone": "010-5512-XXXX",
          "account": "국민 042-118-XXXXXX"
        },
        "secondary_supporter": {
          "name": "최OO (사회복지사)",
          "role": "2차 지정 조력자",
          "phone": "010-7741-XXXX"
        },
        "public_center": "경기도발달장애인지원센터 (031-895-6140)"
      },
      "transaction": {
        "tx_id": "TX-2026-1031-02",
        "timestamp": "2026-10-31 16:40",
        "type": "통신 소액결제 및 신규 통신회선 단말기 할부 등록",
        "counterparty_name": "OO모바일상품권 / 별정통신 다회선(3회선)",
        "counterparty_account": "소액결제 PG 자동청구",
        "amount_krw": 550000,
        "balance_before_krw": 920000,
        "balance_after_krw": 370000,
        "memo": "모바일 문화상품권 핀번호 구매 (3일 내 휴대폰 3대 신규 개통 동반)"
      },
      "ai_analysis": {
        "hybrid_risk_score": 96.8,
        "risk_level": "CRITICAL (고위험 착취 의심)",
        "rule_triggers": [
          "다회선통신 소액결제급증",
          "환금성고위험가맹점 비정상결제"
        ],
        "conflict_detected": false,
        "conflict_reason": "수취인(통신 PG/상품권 가맹점)과 지정 조력자(어머니·사회복지사) 간 이해상충 없음",
        "routing_decision": "당사자 앱 1차 Safe-Pause 안내 발송 + 1차 지정 조력자(어머니)에게 '다회선 개통·소액결제 고위험 알림' 전송",
        "feature_contributions": [
          {
            "feature": "단기 다회선 통신·소액결제 징후",
            "impact": "핵심 위험 징후",
            "detail": "72시간 내 신규 회선 3개 등록 + 소액결제 한도 최대치",
            "bar_pct": 88
          },
          {
            "feature": "환금성 고위험 업종 여부",
            "impact": "주요 주의 징후",
            "detail": "현금화 목적 모바일 상품권 가맹점 결제",
            "bar_pct": 64
          },
          {
            "feature": "최근 24시간 내 연속 거래 빈도",
            "impact": "주요 주의 징후",
            "detail": "1시간 내 10만~20만 원씩 4회 분할 결제 시도",
            "bar_pct": 64
          },
          {
            "feature": "일상 생활반경·시간대 패턴 이탈도",
            "impact": "주요 주의 징후",
            "detail": "평소 미방문 타 지역 대리점 가맹점",
            "bar_pct": 64
          }
        ]
      },
      "easy_read_card": {
        "headline": "잠깐만요! 내 이름으로 휴대폰과 상품권(55만 원)이 결제되고 있어요",
        "pictogram_type": "PHONE_WARNING",
        "easy_sentences": [
          "지금 모바일 상품권 55만 원을 결제하려고 해요.",
          "이번 주에 내 이름으로 새 휴대폰이 3대나 만들어졌어요.",
          "다른 사람에게 휴대폰이나 상품권 번호를 주면, 나중에 내가 모든 돈을 갚아야 해요!"
        ],
        "self_check_questions": [
          "누군가 '휴대폰만 개통해 주면 용돈을 줄게'라고 약속했나요?",
          "내가 직접 쓸 휴대폰과 상품권이 맞나요?",
          "어머니나 복지관 선생님과 먼저 상의해 볼까요?"
        ],
        "tts_script": "서연 님, 잠깐만 멈춰보세요! 지금 오십오만 원짜리 상품권이 결제되고 있고, 내 이름으로 휴대폰 세 대가 새로 만들어졌어요. 다른 사람이 휴대폰을 만들어 달라고 했거나 상품권 번호를 보내달라고 했다면 사기일 수 있어요. 나중에 서연 님이 큰돈을 갚아야 하니 먼저 어머니께 물어볼까요?",
        "self_determination_note": "강제 차단 없이 쉬운 그림 카드로 '내구제 대출·휴대폰 개통 사기' 구조를 설명하고, 원터치로 어머니/지원센터에 전화할 수 있도록 연결합니다."
      }
    },
    {
      "id": "SCEN_03_NIGHT_GROOMING",
      "badge": "핵심 실증 #3 · 온라인/지인 그루밍 심야 반복 송금",
      "title": "심야 시간대(01:20) 오픈채팅 지인 계좌로의 5회 연속 송금",
      "archetype": "유형① 지인·온라인 그루밍 심야·반복 송금 갈취",
      "user_profile": {
        "name": "정우성 (29세, 자폐성장애, 카페 바리스타 근무)",
        "monthly_income": "근로소득 월 185만 원",
        "primary_supporter": {
          "name": "정OO (아버지)",
          "role": "1차 지정 조력자",
          "phone": "010-2290-XXXX",
          "account": "우리 1002-841-XXXXXX"
        },
        "secondary_supporter": {
          "name": "박OO (직무코치)",
          "role": "2차 지정 조력자",
          "phone": "010-6412-XXXX"
        },
        "public_center": "부산시발달장애인지원센터 (051-714-7365)"
      },
      "transaction": {
        "tx_id": "TX-2026-1031-03",
        "timestamp": "2026-10-31 01:20",
        "type": "심야 모바일 계좌이체 (5회차 누적)",
        "counterparty_name": "최OO (미등록 신규 수취인)",
        "counterparty_account": "카카오뱅크 3333-29-XXXXXXX",
        "amount_krw": 480000,
        "balance_before_krw": 610000,
        "balance_after_krw": 130000,
        "memo": "급한 병원비 빌려주기 (오늘 밤 5번째 송금)"
      },
      "ai_analysis": {
        "hybrid_risk_score": 91.5,
        "risk_level": "HIGH (착취 의심 경고)",
        "rule_triggers": [
          "심야 반복 송금 및 잔액 급감 징후"
        ],
        "conflict_detected": false,
        "conflict_reason": "미등록 외부 수취인(최OO)으로 조력자 이해상충 없음",
        "routing_decision": "당사자 앱 1차 Safe-Pause 숙고 유도 → 심야 반복 고위험 기준 도달로 1차 조력자(아버지)에게 2차 알림 전송",
        "feature_contributions": [
          {
            "feature": "심야 시간대(23~05시) 거래 여부",
            "impact": "핵심 위험 징후",
            "detail": "새벽 01시 20분 비일상 시간대 거래",
            "bar_pct": 88
          },
          {
            "feature": "최근 24시간 내 연속 거래 빈도 (5회)",
            "impact": "주요 주의 징후",
            "detail": "23시 이후 동일 수취인에게 5회 쪼개기 송금",
            "bar_pct": 64
          },
          {
            "feature": "계좌 잔액 대비 출금 비율 (78.7%)",
            "impact": "주요 주의 징후",
            "detail": "급여 통장 잔액의 대부분 소진",
            "bar_pct": 64
          },
          {
            "feature": "미등록 신규 수취인 여부",
            "impact": "주요 주의 징후",
            "detail": "3일 전 처음 거래가 시작된 계좌",
            "bar_pct": 64
          }
        ]
      },
      "easy_read_card": {
        "headline": "지금은 새벽 1시 20분이에요. 오늘 밤에만 다섯 번째 돈을 보내고 있어요",
        "pictogram_type": "NIGHT_CLOCK",
        "easy_sentences": [
          "오늘 밤 최OO 님에게 벌써 5번이나 돈을 보냈어요 (총 92만 원).",
          "친한 사이라도 밤늦게 계속 돈을 달라고 하는 것은 위험한 신호예요.",
          "지금 바로 보내지 말고, 내일 아침에 다시 생각해 보면 어떨까요?"
        ],
        "self_check_questions": [
          "상대방이 '지금 당장 안 보내면 큰일 난다'고 재촉하나요?",
          "전에 빌려준 돈은 약속대로 돌려받았나요?",
          "내일 아침 밝을 때 다시 확인하고 보내도 괜찮지 않을까요?"
        ],
        "tts_script": "우성 님, 지금은 새벽 한 시 이십 분이에요. 오늘 밤에만 최OO 님에게 다섯 번째 돈을 보내고 있어요. 누군가 밤늦게 지금 당장 돈을 보내라고 재촉한다면 잠시 멈추고 내일 아침에 다시 결정해 보세요.",
        "self_determination_note": "심야 시간대 정서적 압박(그루밍·재촉) 상태에서 벗어날 수 있도록 '내일 아침에 다시 보내기(12시간 보류 예약)' 버튼을 함께 제공합니다."
      }
    },
    {
      "id": "SCEN_04_PROXY_LOAN",
      "badge": "핵심 실증 #4 · 비대면 카드론·소액대출 실행 직후 타인 이체",
      "title": "비대면 카드론 300만 원 입금 15분 후 제3자 계좌 전액 이체 시도",
      "archetype": "유형⑥ 명의도용 비대면 카드론·소액대출 실행 후 이체",
      "user_profile": {
        "name": "한지훈 (31세, 지적장애 3급, 물류센터 근무)",
        "monthly_income": "근로소득 월 205만 원",
        "primary_supporter": {
          "name": "한OO (형)",
          "role": "1차 지정 조력자",
          "phone": "010-9012-XXXX",
          "account": "하나 391-910-XXXXXX"
        },
        "secondary_supporter": {
          "name": "대구발달장애인지원센터",
          "role": "공공 권익옹호기관",
          "phone": "053-719-0340"
        },
        "public_center": "대구발달장애인지원센터 (053-719-0340)"
      },
      "transaction": {
        "tx_id": "TX-2026-1031-04",
        "timestamp": "2026-10-31 14:05",
        "type": "비대면 장기카드론 입금 직후 타행 이체",
        "counterparty_name": "강OO (미등록 수취인)",
        "counterparty_account": "농협 352-1094-XXXX-XX",
        "amount_krw": 3000000,
        "balance_before_krw": 3180000,
        "balance_after_krw": 180000,
        "memo": "중고차 공동투자 보증금"
      },
      "ai_analysis": {
        "hybrid_risk_score": 98.4,
        "risk_level": "CRITICAL (고위험 착취·사기 의심)",
        "rule_triggers": [
          "비대면대출직후 제3자이체",
          "연금급여 입금직후 일괄유출"
        ],
        "conflict_detected": false,
        "conflict_reason": "미등록 외부 수취인(강OO)으로 조력자 이해상충 없음",
        "routing_decision": "당사자 앱 1차 Safe-Pause + 1차 조력자(형) 및 대구발달장애인지원센터 동시 긴급 알림",
        "feature_contributions": [
          {
            "feature": "대출·현금서비스 실행 직후 타인 이체",
            "impact": "핵심 위험 징후",
            "detail": "카드론 300만 원 입금 후 15분 만에 전액 이체 시도",
            "bar_pct": 88
          },
          {
            "feature": "개인 평소 결제액 대비 배수 (Z=+6.1σ)",
            "impact": "주요 주의 징후",
            "detail": "평소 거래 규모의 120배 초과",
            "bar_pct": 64
          },
          {
            "feature": "계좌 잔액 대비 출금 비율 (94.3%)",
            "impact": "주요 주의 징후",
            "detail": "대출금 전액 유출",
            "bar_pct": 64
          },
          {
            "feature": "미등록 신규 수취인 여부",
            "impact": "주요 주의 징후",
            "detail": "최초 거래 계좌",
            "bar_pct": 64
          }
        ]
      },
      "easy_read_card": {
        "headline": "잠깐만요! 방금 빌린 대출금 300만 원을 다른 사람에게 보내려고 해요",
        "pictogram_type": "LOAN_ALERT",
        "easy_sentences": [
          "이 돈 300만 원은 카드회사에서 빌린 '빚(대출)'이에요.",
          "강OO 님에게 이 돈을 보내도, 매달 이자와 원금은 지훈 님이 직접 갚아야 해요.",
          "다른 사람이 '대출만 받아주면 내가 대신 갚아줄게'라고 한 말은 거짓말일 가능성이 매우 높아요!"
        ],
        "self_check_questions": [
          "누군가 내 휴대폰을 같이 보면서 대출 버튼을 누르게 했나요?",
          "'내가 이자까지 다 갚아줄 테니 돈만 보내라'고 했나요?",
          "형이나 지원센터 선생님에게 먼저 전화해서 확인해 볼까요?"
        ],
        "tts_script": "지훈 님, 잠깐만요! 지금 보내려는 삼백만 원은 카드회사에서 빌린 대출금이에요. 다른 사람에게 보내더라도 나중에 지훈 님이 매달 힘들게 갚아야 하는 빚이에요. 누군가 대신 갚아주겠다고 약속했다면 보내지 말고 먼저 형이나 지원센터에 알려주세요.",
        "self_determination_note": "대출금 제3자 이체의 법적 상환 책임이 본인에게 귀속됨을 쉬운 말과 그림으로 명확히 고지합니다."
      }
    },
    {
      "id": "SCEN_05_NORMAL_SAFE",
      "badge": "대조군 실증 #5 · 오탐지(False Positive) 방지 검증 (일상 정상 고액 지출)",
      "title": "매월 정기 월세 이체 및 장애인복지관 프로그램 참가비 결제 (정상 거래)",
      "archetype": "일상 정상 금융거래 (오탐지 제어 검증 시나리오)",
      "user_profile": {
        "name": "김민준 (26세, 지적장애 3급, 자립생활 2년차)",
        "monthly_income": "장애인연금 및 보호작업장 급여 월 142만 원",
        "primary_supporter": {
          "name": "박OO (활동지원사)",
          "role": "1차 지정 조력자",
          "phone": "010-8821-XXXX",
          "account": "신한 110-492-XXXXXX"
        },
        "secondary_supporter": {
          "name": "김OO (누나 / 가족)",
          "role": "2차 지정 조력자",
          "phone": "010-3319-XXXX"
        },
        "public_center": "서울시발달장애인지원센터 권익옹호팀 (02-2135-3635)"
      },
      "transaction": {
        "tx_id": "TX-2026-1031-05",
        "timestamp": "2026-10-25 14:10",
        "type": "정기 월세 계좌이체 (등록 임대인)",
        "counterparty_name": "윤OO (등록 임대인 · 14개월 연속 동일 일자)",
        "counterparty_account": "우리 1002-331-XXXXXX",
        "amount_krw": 400000,
        "balance_before_krw": 1180000,
        "balance_after_krw": 780000,
        "memo": "10월 원룸 월세"
      },
      "ai_analysis": {
        "hybrid_risk_score": 8.4,
        "risk_level": "SAFE (정상 일상 거래 — 간섭 없음)",
        "rule_triggers": [],
        "conflict_detected": false,
        "conflict_reason": "해당 없음 (정상 거래)",
        "routing_decision": "알림 미발송 (당사자의 일상적 금융 주권 및 거래 편의성 100% 보장)",
        "feature_contributions": [
          {
            "feature": "기등록 정기 수취인 일치 (14개월 연속)",
            "impact": "안전 요인 (정상 패턴)",
            "detail": "매월 25일 동일 금액(40만 원) 반복 이력",
            "bar_pct": 35
          },
          {
            "feature": "일상 시간대 거래 (14:10)",
            "impact": "안전 요인 (정상 패턴)",
            "detail": "주간 정상 시간대",
            "bar_pct": 35
          },
          {
            "feature": "거래 금액 규모 (400,000원)",
            "impact": "주요 주의 징후",
            "detail": "고액이나 정기 고정지출 패턴 내 일치",
            "bar_pct": 64
          }
        ]
      },
      "easy_read_card": {
        "headline": "안전한 정기 월세 거래예요! 불편한 알림 없이 바로 송금됩니다",
        "pictogram_type": "CHECK_SAFE",
        "easy_sentences": [
          "매달 25일에 보내는 40만 원 월세 거래예요.",
          "세이프포즈 AI는 안전한 일상 거래에는 불필요한 경고창을 띄우지 않아요.",
          "민준 님의 편리하고 자유로운 금융생활을 응원합니다!"
        ],
        "self_check_questions": [
          "평소대로 안전하게 송금이 완료되었습니다."
        ],
        "tts_script": "매달 보내는 안전한 월세 거래입니다. 불편한 확인 절차 없이 바로 송금됩니다.",
        "self_determination_note": "정상 거래를 위험으로 오인하는 오탐지(False Positive)가 당사자의 금융 주권을 위축시키지 않도록 개인별 정기지출 화이트리스트 학습을 적용했습니다."
      }
    }
  ]
};
