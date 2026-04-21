import '../css/Quiz.css'
import { data } from '../assets/data';
import { useState, useRef } from 'react';
function Quiz() {
    const [index, setIndex] = useState(0)
    const question = data[index]
    // 答题锁，当用户点击完选项之后不可再点击
    const [isLock, setIsLock] = useState(false)
    const optionRef1 = useRef(null)
    const optionRef2 = useRef(null)
    const optionRef3 = useRef(null)
    const optionRef4 = useRef(null)
    const optionRefArr = [optionRef1, optionRef2, optionRef3, optionRef4]
    // 点击回答问题
    function checkAns(e, ans) {
        // console.log(12)
        if (!isLock) {
            if (question.ans === ans) {
                e.target.classList.add('correct')
                setIsLock(true)
            } else {
                e.target.classList.add('wrong')
                setIsLock(true)
                // 用户答错时,正确答案也会标出来
                optionRefArr[question.ans - 1].current.classList.add('correct')

            }
        }
    }
    // 点击下一题
    const handleNext = () => {
        // 1. 判断是否还有下一题 (注意是 length - 1)
        if (index < data.length - 1) {
            // 切换到下一题
            setIndex(prev => prev + 1);

            // 2. 重置题目状态 (非常重要！)
            setIsLock(false);

            // 3. 清除所有选项的样式
            optionRefArr.forEach(ref => {
                if (ref.current) {
                    ref.current.classList.remove('correct', 'wrong');
                }
            });
        } else {
            // 如果是最后一题，可以回到第一题或者跳转到结果页
            alert("测试结束！即将回到第一题");
            setIndex(0);
            setIsLock(false);
            // 同样需要清除样式...
            optionRefArr.forEach(ref => {
                if (ref.current) {
                    ref.current.classList.remove('correct', 'wrong');
                }
            });
        }
    };
    return (<>
        <div className="quiz-app">
            <h2>Quiz App</h2>
            <div className="underline"></div>
            <div className="question">{index + 1}.<span>{question.question}</span></div>
            <div className="option">
                <div ref={optionRef1} className='option-item' onClick={(e) => checkAns(e, 1)}>
                    {question.option1}
                </div>
                <div ref={optionRef2} className='option-item' onClick={(e) => checkAns(e, 2)} >
                    {question.option2}
                </div>
                <div ref={optionRef3} className='option-item' onClick={(e) => checkAns(e, 3)} >
                    {question.option3}
                </div>
                <div ref={optionRef4} className='option-item' onClick={(e) => checkAns(e, 4)} >
                    {question.option4}
                </div>
            </div>
            <div className="next-btn" onClick={handleNext} >
                <button >Next</button>
            </div>
            <span>{index + 1}/{data.length}问题</span>
        </div>

    </>);
}

export default Quiz;