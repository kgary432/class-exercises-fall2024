def hello_world():
    return "Hello world!"


def rps(hand1, hand2):
    # finish this code:
    if ( # will be flagged by linter either way for being too long, this way is more legible
        (hand1 == "rock" or hand1 == "paper" or hand1 == "scissors")
        and (hand2 == "rock" or hand2 == "paper" or hand2 == "scissors")
        and (hand1 == hand2)
    ):
        return "Tie!"
    # paper win combos
    if hand1 == "rock" and hand2 == "paper":
        return "Paper wins!"

    if hand1 == "paper" and hand2 == "rock":
        return "Paper wins!"
    # rock win combos
    if hand1 == "rock" and hand2 == "scissors":
        return "Rock wins!"
    if hand1 == "scissors" and hand2 == "rock":
        return "Rock wins!"
    # scissors wins combos
    if hand1 == "scissors" and hand2 == "paper":
        return "Scissors wins!"
    if hand1 == "paper" and hand2 == "scissors":
        return "Scissors wins!"
    else:
        return "Invalid"
