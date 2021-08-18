let candidates=[];
let studentIds=[];
let votedCandidates=[];
let candidatekey=[];
let countvalue=[];
let map1=new Map();

    let fn1=function addcandidate(candidate) {
       candidates.push(candidate);
       console.log('candidates::',candidates)
       localStorage.setItem('candidates',candidates)
       const candi=localStorage.getItem('candidates');
       console.log('candi:',candi);
       
        
    } 

    
    let fn2=function addStudentID(studentid)
    {
        if(studentIds.length!==0)
        {
            let pos=studentIds.indexOf(studentid);
            if(pos===-1)
            {
                alert(`${studentid} , your response has been recorded!`)

                 studentIds.push(studentid);

            }
            else
            {
                alert(`${studentid} , your have already voted!`)

            }
        }
        else
        {
            studentIds.push(studentid);
        }
        console.log('ids::',studentIds)
    }

    let fn3=function addVotes(candidateVoted)
    {
        
        votedCandidates.push(candidateVoted);
        
        console.log('votes::',votedCandidates);

       
    }
    let fn4=function VotingSummary()
    {
        for(var i=0;i<votedCandidates.length;i++)
        {
         
                 map1 = votedCandidates.reduce((votedCandidates, e) => votedCandidates.set(e, (votedCandidates.get(e) || 0) + 1), new Map());


            }
           
        console.log('map1::',[ ...map1.entries() ]);

        for (let vote of map1.keys()) {
            candidatekey.push(vote);
          }
          console.log('keyss::',candidatekey)
          for (let count of map1.values()) {
            countvalue.push(count);
          }
          console.log('valuess::',countvalue)
          

       
        localStorage.setItem('map1',[...map1]);
        const m=localStorage.getItem('map1')
        console.log('m1::',m)
        localStorage.setItem('candidatekeys',candidatekey);
        const candidatekeyll=localStorage.getItem('candidatekeys')
        console.log('candidatekeys::',candidatekeyll)
        localStorage.setItem('countvalues',countvalue);
        const countvaluell=localStorage.getItem('countvalues')
        console.log('count::',countvaluell)
    }
    
    let fn5=function PollResult()
    { let fmx=countvalue[0];
        for(var i=0;i<countvalue.length;i++)
        {
        console.log('vl:',countvalue[i])

            if(countvalue[i]>fmx)
            {
                fmx=countvalue[i];
            }
        }
        console.log('fmx:',fmx)
        let smx=countvalue[0];
        for(var i=0;i<countvalue.length;i++)
        {
            if(countvalue[i]>smx && countvalue[i]<fmx)
            {
                smx=countvalue[i];
            }
        }
        console.log('smx:',smx)

        let m1,m2;
        for (let [key, value] of map1.entries()) {
            if (value === fmx)
            {
                m1=key;
                break;
            }
             
            

          }
          console.log('m1',m1)
        //   resKey.push(m1);
          for (let [key, value] of map1.entries()) {
            if (value === smx)
            {
                m2=key;
                break;
            }
             


          }
          console.log('m2',m2)
 
       
        localStorage.setItem('fmx',fmx);
        const a=localStorage.getItem('fmx')
        console.log('m1::',a)
        localStorage.setItem('smx',smx);
        const b=localStorage.getItem('smx')
        console.log('m2::',b)
       
        localStorage.setItem('m1',m1);
        const c=localStorage.getItem('m1')
        console.log('v1::',c)
        localStorage.setItem('m2',m2);
        const d=localStorage.getItem('m2')
        console.log('v2::',d)


    }

module.exports.fn1 = fn1;
module.exports.fn2 = fn2;
module.exports.fn3 = fn3;
module.exports.fn4=fn4;
module.exports.fn5=fn5;

